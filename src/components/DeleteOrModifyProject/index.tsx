import Styles from "./Styles.module.scss";
import { closeModal, PropsTable } from "@/@types";
import { useState } from "react";
import { api } from "@/services";
import toast from "../Toast";
import DeleteProject from "../DeleteOneProject";
import { useShowModal } from "@/hooks/ModalOpen";
// import { useState } from "react";

export const DeleteOrModifyProject: React.FC<closeModal> = ({
  closeModaFunction,
  projectName,
  month,
  id,
}: closeModal) => {
  const [data, setData] = useState<PropsTable>({
    projectName: "",
    hours: "",
    month: "",
    deadline: "",
  });

  const handleName = e => {
    const name = e.currentTarget.value;
    setData({
      ...data,
      projectName: name,
    });
  };
  const handleMonth = e => {
    const month = e.currentTarget.value;
    setData({
      ...data,
      month: month,
    });
  };
  const handleDay = event => {
    const day = event.currentTarget.value;
    if (day >= 1 && day <= 31) {
      setData({
        ...data,
        days: day,
      });
    } else {
      setData({
        ...data,
        days: day.replace(/\d/g, ""),
      });
    }
  };
  const handleHours = e => {
    const hours = e.currentTarget.value;
    setData({
      ...data,
      hours: hours,
    });
  };
  const year = new Date().getFullYear();
  data.deadline = `${data.month} ${data.days} ${year} ${data.hours}`;
  function atualizationProject() {
    if (data.deadline === "" || data.projectName === "") {
      console.log("tente novamente");
      toast({ type: "error", message: "Algo deu errado, tente novamente!" });
    } else {
      api
        .put(`/${id}`, {
          name: data.projectName,
          deadline: data.deadline,
        })
        .then(response => {
          alert(
            `Atualizado com sucesso ${response.status}, por favor atualize a página`,
          );
        })
        .catch(() => {
          alert("Algo deu errado!");
        });
    }
  }
  // const [openDelete, setOpenDelete] = useState(false);
  const { visible, openModaFunction, closeModalFunction } = useShowModal();
  function openDelete() {
    // setOpenDelete(false);
    openModaFunction();
  }
  function closeDelete() {
    closeModalFunction();
  }
  return (
    <>
      <section className={Styles.container}>
        <div className={Styles.wrapper}>
          <div className={Styles.close} onClick={closeModaFunction}>
            <span className={Styles.line1}></span>
            <span className={Styles.line2}></span>
          </div>
          <h1>{projectName}</h1>
          <input
            type="text"
            name="name"
            id={Styles.newProject}
            onChange={handleName}
            autoComplete="off"
            placeholder="Editar nome do projeto"
          />
          <div className={Styles.info}>
            <h2>Prazo de entrega do projeto / {month}</h2>
            <div className={Styles.form}>
              <select
                value={data.month}
                onChange={handleMonth}
                name="mes"
                id={Styles.mes}
              >
                <option>Mês</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
              <input
                type="number"
                name="dia"
                min="1"
                max="31"
                onChange={handleDay}
                value={data.days}
                id={Styles.day}
                placeholder="Dia"
              />
              <input
                onChange={handleHours}
                type="text"
                id={Styles.hours}
                value={data.hours}
                placeholder="- - : - -🧭"
              />
            </div>
          </div>

          <div className={Styles.saveOrDelete}>
            <button className={Styles.cancel} onClick={openDelete}>
              Excluir
            </button>
            <button className={Styles.save} onClick={atualizationProject}>
              Salvar
            </button>
          </div>
        </div>
      </section>
      {visible ? (
        <DeleteProject
          id={id}
          projectName={projectName}
          onClick={closeDelete}
          onCloseModal={closeDelete}
        />
      ) : (
        ""
      )}
    </>
  );
};
