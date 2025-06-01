Hooks.once('ready', () => {
    console.log("hooook!")
    if (!game.user.isGM) return;

    const templatePath = 'modules/lang-ua/warning.html';

    renderTemplate(templatePath).then(html => {
        new Dialog({
            title: "Модуль архівовано",
            content: html,
            buttons: {
                ok: {
                    label: "OK"
                }
            }
        }).render(true);
    });
});
