import toast from "components/Toast";
import { api } from "@/services";
import { MouseEventHandler } from "react";
import Styles from "./Styles.module.scss";

type closeModal = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  closeModalFunctionButton?: MouseEventHandler<HTMLButtonElement>;
  closeAll?: MouseEventHandler<HTMLButtonElement>;
  onCloseModal?: () => void;
  deleteProject?: () => void;
  id: string;
  projectName: string;
};

function DeleteProject({ projectName, onCloseModal, onClick, id }: closeModal) {
  function deleteProject() {
    api
      .delete(`/${id}`)
      .then(response => {
        alert("Excluido com sucesso");
        toast({
          type: "sucess",
          message: `Excluído com sucesso ${response.status}, por favor atualize a página`,
        });
      })
      .catch(() => {
        alert("Algo deu errado!");
        toast({
          type: "error",
          message: "Algo deu errado, tente novamente!",
        });
      });
  }
  return (
    <section className={Styles.container}>
      <div className={Styles.wrapper}>
        <div className={Styles.close} onClick={onCloseModal}>
          <span className={Styles.line1}></span>
          <span className={Styles.line2}></span>
        </div>
        <div className={Styles.text}>
          <h1>Tem certeza que deseja apagar</h1>
          <strong>{projectName}?</strong>
          <p>Esta ação não poderá ser desfeita!</p>
        </div>
        <div className={Styles.DeleteOrCancel}>
          <button className={Styles.cancel} onClick={onClick}>
            Cancelar
          </button>
          <button className={Styles.delete} onClick={deleteProject}>
            Excluir
          </button>
        </div>
      </div>
    </section>
  );
}

export default DeleteProject;
