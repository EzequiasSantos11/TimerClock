import { Header } from "../components/Header";
import { Table } from "../components/Table";
import { useState } from "react";
import { DeleteOrModifyProject } from "@/components/DeleteOrModifyProject";
import { useShowModifyOrDelete } from "@/hooks/ModalOpen";
import Styles from "../../styles/Home.module.scss";

export default function Home() {
  const [view, setView] = useState(false);
  const { visibleModify, closeModifyFunction } = useShowModifyOrDelete();
  return (
    <section className={Styles.container}>
      <Header />
      <main>
        <Table view={view} />
        {visibleModify ? (
          <DeleteOrModifyProject
            projectName="projeto"
            closeModalFunctionButton={closeModifyFunction}
            closeModaFunction={closeModifyFunction}
          />
        ) : (
          ""
        )}
      </main>
      <button className={Styles.viewMore} onClick={() => setView(!view)}>
        {view ? "Exibir menos Projetos" : "Exibir mais Projetos"}
        <img
          className={`${view ? `${Styles.more}` : `${Styles.less}`}`}
          src="/assets/arrow-down.svg"
          alt="view"
        />
      </button>
      <div className={Styles.background}>
        <img src="/assets/Background.png" alt="" />
      </div>
    </section>
  );
}
