interface ScriptProps {
  id: string;
  url: string;
  attr?: Record<string, any>;
  parent?: HTMLElement;
  callback(): void;
}

const initiateLoadDynamicScripts = () => {
  const currentLoadedScript: Record<string, string> = {};

  const loadDynamicScript = ({
    id,
    url,
    attr = {},
    parent = document.body,
  }: Pick<ScriptProps, 'id' | 'url' | 'attr' | 'parent'>) =>
    new Promise((resolve, reject) => {
      const existingScript = document.getElementById(id);

      const addScriptElement = () => {
        const script = document.createElement('script');
        script.src = url;
        script.id = id;
        Object.keys(attr).forEach((attrName) => {
          script.setAttribute(attrName, attr[attrName]);
        });
        parent.appendChild(script);
        script.onload = () => {
          currentLoadedScript[id] = url;
          return resolve();
        };
        script.onerror = () => reject(new Error(`Error loading ${url}`));
      };

      if (!existingScript) {
        return addScriptElement();
      }

      if (existingScript) {
        if (currentLoadedScript[id]) {
          return resolve();
        }

        existingScript.parentNode?.removeChild(existingScript);
        return addScriptElement();
      }

      return null;
    });

  const callbackOnLoaded = ({ id, url, callback, attr = {} }: ScriptProps) =>
    loadDynamicScript({ id, url, attr }).then(callback);

  return (scripts: ScriptProps[]) => Promise.all(scripts.map(callbackOnLoaded));
};

export default initiateLoadDynamicScripts();
