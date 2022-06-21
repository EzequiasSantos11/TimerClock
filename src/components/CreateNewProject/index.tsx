import Styles from "./Styles.module.scss";
import { closeModal, PropsTable } from "@/@types";
import { useState } from "react";
import { api } from "@/services";
import { Input } from "../Input";
import toast from "../Toast";
// import { useState } from "react";

const CreateNewProject: React.FC<closeModal> = ({
  closeModaFunction,
  closeModalFunctionButton,
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
    const date = hours.replace(/(\d{2})(\d{2})(\d{2})/g, "$1:$2:$3");
    setData({
      ...data,
      hours: date,
    });
  };
  const year = new Date().getFullYear();
  data.deadline = `${data.month} ${data.days} ${year} ${data.hours}`;
  // const datenew = new Date(date).getTime() / 1000;
  // function mostrar() {
  //   if (
  //     data.days === "" ||
  //     data.month === "" ||
  //     data.month === "Mês" ||
  //     data.hours === ""
  //   ) {
  //     toast({ type: "warning", message: "Dados incorretos" });
  //   } else {
  //     // console.log(`salvo com sucesso ${date}`);
  //     console.log(`salvo com sucesso ${date}`);
  //     setData({
  //       ...data,
  //       deadline: date,
  //     });
  //     ;
  //   }
  // }

  function saveNewProject() {
    if (data.deadline === "" || data.projectName === "") {
      toast({ type: "error", message: "Error clique em (Salvar) novamente! " });
      alert("algo deu errado!");
    } else {
      api
        .post("/", {
          name: data.projectName,
          deadline: data.deadline,
        })
        .then(response => {
          alert("criado com sucesso!");
          toast({
            type: "info",
            message: `Sucesso, status ${response.status}, recarregue a página!`,
          });
        })
        .catch(error => {
          alert("Algo deu errado!");
          toast({
            type: "error",
            message: `Algo deu errado! Status${error}`,
          });
        });
    }
  }

  return (
    <section className={Styles.container}>
      <div className={Styles.wrapper}>
        <div className={Styles.close} onClick={closeModaFunction}>
          <span className={Styles.line1}></span>
          <span className={Styles.line2}></span>
        </div>
        <h1>Novo Projeto</h1>
        <input
          type="text"
          name="name"
          id={Styles.newProject}
          onChange={handleName}
          autoComplete="off"
          placeholder="Nome do projeto"
        />
        <div className={Styles.info}>
          <h2>Prazo de entrega do projeto</h2>
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
            <div className={Styles.inputHours}>
              <Input
                type="text"
                id={Styles.hours}
                onChange={handleHours}
                placeholder="hh : mm : ss"
              />
              <img src="assets/relogio.svg" alt="icone-relogio" />
            </div>
          </div>
        </div>
        <div className={Styles.saveOrCancel}>
          <button className={Styles.cancel} onClick={closeModalFunctionButton}>
            Cancelar
          </button>
          <button className={Styles.save} onClick={saveNewProject}>
            Salvar
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreateNewProject;
