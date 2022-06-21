import React, { useState, useEffect } from "react";
import DeleteProject from "../DeleteOneProject";
import { DeleteOrModifyProject } from "../DeleteOrModifyProject";
import Styles from "./styles.module.scss";

interface ItemGrup {
  deadline: string;
  projectName: string;
  id?: string;
}
const ItemGrup: React.FC<ItemGrup> = ({
  deadline,
  projectName,
  id,
}: ItemGrup) => {
  const deadLines = new Date(deadline);
  const name = projectName;
  const [data, setData] = useState({
    days: 0,
    hours: 0,
    minuts: 0,
    seconds: 0,
    projectName: name,
  });
  const upDateCountDown = () => {
    const currentTime = new Date();
    const differenceInMs = deadLines.valueOf() - currentTime.valueOf();
    const days = Math.floor(differenceInMs / 1000 / 60 / 60 / 24);
    const hours = Math.floor(differenceInMs / 1000 / 60 / 60) % 24;
    const minuts = Math.floor(differenceInMs / 1000 / 60) % 60;
    const seconds = Math.floor(differenceInMs / 1000) % 60;
    // Salvando nas variáveis useState.
    setData({
      ...data,
      days: days,
      hours: hours,
      minuts: minuts,
      seconds: seconds,
    });
  };
  setInterval(upDateCountDown, 1000);
  // Variáveis de apresentação dos dados.
  const [negative, setNegative] = useState(false);
  useEffect(() => {
    if (data.days <= 0) {
      setNegative(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const days = data.days > 10 || data.days < 0 ? data.days : "0" + data.days;
  const hours =
    data.hours > 10 || data.hours < 0 ? data.hours : "0" + data.hours;
  const minuts =
    data.minuts > 10 || data.minuts < 0 ? data.minuts : "0" + data.minuts;
  const seconds =
    data.seconds > 10 || data.seconds < 0 ? data.seconds : "0" + data.seconds;

  // Os useState a seguir cuidam da abertura e fechamento do modal de modificação do projeto.
  const [openModal, setOpenModal] = useState(false);
  // Os useState a seguir cuidam da abertura e fechamento do modal de deletar um projeto.
  const [openDelete, setOpenDelete] = useState(false);
  // Função que fecha todos os modal.
  function closeAll() {
    setOpenDelete(false);
    setOpenModal(!openModal);
  }
  function closeDelete() {
    setOpenDelete(false);
  }

  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.itemGrup}>
          <div className={Styles.title1}>
            <h1>{data.projectName}</h1>
            <div className={Styles.buttons}>
              <button
                className={Styles.btn_apagar}
                onClick={() => setOpenDelete(true)}
              >
                Apagar
              </button>
              <button
                className={Styles.btn_editar}
                onClick={() => setOpenModal(true)}
              >
                Editar
              </button>
            </div>
          </div>
        </div>
        <div className={Styles.itemGrup}>
          <div
            className={`${
              negative ? `${Styles.subIitem_red}` : `${Styles.subIitem}`
            }`}
          >
            <span>{days}</span>
            <p>d</p>
          </div>
          <div
            className={`${
              negative ? `${Styles.subIitem_red}` : `${Styles.subIitem}`
            }`}
          >
            <span>{hours}</span>
            <p>h</p>
          </div>
          <div
            className={
              negative ? `${Styles.subIitemred}` : `${Styles.subIitem}`
            }
          >
            <span>{minuts}</span>
            <p>m</p>
          </div>
          <div
            className={`${
              negative ? `${Styles.subIitem_red}` : `${Styles.subIitem}`
            }`}
          >
            <span>{seconds}</span>
            <p>s</p>
          </div>
        </div>
        <div className={Styles.itemGrup}>
          <div
            className={`${
              negative ? `${Styles.subIitem_red}` : `${Styles.subIitem}`
            }`}
          >
            <span>{days}</span>
            <p>d</p>
          </div>
          <div
            className={`${
              negative ? `${Styles.subIitem_red}` : `${Styles.subIitem}`
            }`}
          >
            <span>{hours}</span>
            <p>h</p>
          </div>
          <div
            className={`${
              negative ? `${Styles.subIitem_red}` : `${Styles.subIitem}`
            }`}
          >
            <span>{minuts}</span>
            <p>m</p>
          </div>
          <div
            className={`${
              negative ? `${Styles.subIitem_red}` : `${Styles.subIitem}`
            }`}
          >
            <span>{seconds}</span>
            <p>s</p>
          </div>
        </div>
        <div className={Styles.itemGrup}>
          <div
            className={`${
              negative ? `${Styles.subIitem_red}` : `${Styles.subIitem}`
            }`}
          >
            <span>{days}</span>
            <p>d</p>
          </div>
          <div
            className={`${
              negative ? `${Styles.subIitem_red}` : `${Styles.subIitem}`
            }`}
          >
            <span>{hours}</span>
            <p>h</p>
          </div>
          <div
            className={`${
              negative ? `${Styles.subIitem_red}` : `${Styles.subIitem}`
            }`}
          >
            <span>{minuts}</span>
            <p>m</p>
          </div>
          <div
            className={`${
              negative ? `${Styles.subIitem_red}` : `${Styles.subIitem}`
            }`}
          >
            <span>{seconds}</span>
            <p>s</p>
          </div>
        </div>
        <div className={Styles.itemGrup}>
          <div
            className={`${
              negative ? `${Styles.subIitem_red}` : `${Styles.subIitem}`
            }`}
          >
            <span>{days}</span>
            <p>d</p>
          </div>
          <div
            className={`${
              negative ? `${Styles.subIitem_red}` : `${Styles.subIitem}`
            }`}
          >
            <span>{hours}</span>
            <p>h</p>
          </div>
          <div
            className={`${
              negative ? `${Styles.subIitem_red}` : `${Styles.subIitem}`
            }`}
          >
            <span>{minuts}</span>
            <p>m</p>
          </div>
          <div
            className={`${
              negative ? `${Styles.subIitem_red}` : `${Styles.subIitem}`
            }`}
          >
            <span>{seconds}</span>
            <p>s</p>
          </div>
        </div>
        <div className={Styles.itemGrup}>
          <div
            className={`${
              negative ? `${Styles.subIitem_red}` : `${Styles.subIitem}`
            }`}
          >
            <h2>{deadline}</h2>
          </div>
        </div>
      </div>
      {openModal ? (
        <DeleteOrModifyProject
          closeModaFunction={() => setOpenModal(!openModal)}
          closeModalFunctionButton={() => setOpenModal(!openModal)}
          projectName={data.projectName}
          month={deadline}
          id={id}
        />
      ) : (
        ""
      )}
      {openDelete ? (
        <DeleteProject
          id={id}
          projectName={data.projectName}
          onClick={closeDelete}
          closeAll={closeAll}
          onCloseModal={() => setOpenDelete(false)}
          deleteProject={() => console.log("fechado")}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default ItemGrup;
