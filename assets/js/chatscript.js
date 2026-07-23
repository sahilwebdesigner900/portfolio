const typebotInitScript = document.createElement("script");
typebotInitScript.type = "module";
typebotInitScript.innerHTML = `import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0/dist/web.js'

Typebot.initBubble({
  typebot: "lead-generation-ol73zwa",
  theme: { button: { backgroundColor: "#149ddd" } },
});
`;
document.body.append(typebotInitScript);
