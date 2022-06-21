import { useShowModal } from "@/hooks/ModalOpen";
import Styles from "./header.module.scss";
import CreateNewProject from "../CreateNewProject";

export const Header: React.FC = () => {
  const { visible, closeModalFunction, openModaFunction } = useShowModal();
  return (
    <>
      <header className={Styles.container}>
        <div className={Styles.left}>
          <img
            className={Styles.logo}
            src="/assets/logoget.png"
            alt="logo-GetHash"
          />
          <span>Tabela de Projetos</span>
          <h1>Datas e Horas de Projetos</h1>
        </div>
        <button className={Styles.addProject} onClick={openModaFunction}>
          <i>+</i>
          Adicionar Projeto
        </button>
      </header>
      {visible ? (
        <CreateNewProject
          closeModaFunction={closeModalFunction}
          closeModalFunctionButton={closeModalFunction}
        />
      ) : (
        ""
      )}
    </>
  );
};
