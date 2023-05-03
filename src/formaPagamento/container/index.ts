import { container } from "tsyringe";
import { IFormaPagamentoRepository } from "../repositories/iFormaPagamentoRepository";
import { RepositoryFormaPagamento } from "../repositories/formaPagamentoRepository";
import { CreateFormaPagamentoController } from "../useCases/createFormaPagamento/createFormaPagamentoController";
import { DeleteFormaPagamentoController } from "../useCases/deleteFormaPagamento/deleteFormaPagamentoController";
import { ListFormaPagamentoController } from "../useCases/listFormaPagamento/listFormaPagamentoController";
import { ShowFormaPagamentoController } from "../useCases/showFormaPagamento/showFormaPagamentoController";
import { UpdateFormaPagamentoController } from "../useCases/updateFormaPagamento/updateFormaPagamentoController";
container.registerSingleton<IFormaPagamentoRepository>(
    "RepositoryFormaPagamento",
    RepositoryFormaPagamento,
);

container.registerSingleton(
    "CreateFormaPagamentoController",
    CreateFormaPagamentoController,
);
container.registerSingleton(
    "DeleteFormaPagamentoController",
    DeleteFormaPagamentoController,
);
container.registerSingleton(
    "ListFormaPagamentoController",
    ListFormaPagamentoController,
);
container.registerSingleton(
    "ShowFormaPagamentoController",
    ShowFormaPagamentoController,
);
container.registerSingleton(
    "UpdateFormaPagamentoController",
    UpdateFormaPagamentoController,
);
