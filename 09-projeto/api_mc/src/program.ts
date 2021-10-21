import StartUp from "./startUp";

let port = "5000";

StartUp.app.listen(port, function () {
    console.log(`Servidor rodando na porta: ${port}`);
});