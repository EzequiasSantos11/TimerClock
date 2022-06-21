import ItemGrup from "../ItemGrup";
import Styles from "./table.module.scss";
import { api } from "../../services";
import { useEffect, useState } from "react";
import { DataApi } from "@/@types";

export function Table({ view }) {
  //useShowModal muda a visialisação do modal de editar projetos para (true) ou (false).
  // const { visible, closeModalFunction } = useShowModal();
  //A constante a seguir salva os dados vindos da api.
  const [data, setData] = useState<DataApi[]>([]);
  //A função a seguir com o useEffect cuidam de fazer uma requisição a api e salvar os dados na constante data.
  useEffect(() => {
    api
      .get("/")
      .then(({ data }) => {
        setData([data]);
      })
      .catch(() => {
        setData([]);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log({ data });

  return (
    <div className={`${view ? `${Styles.viewMore}` : `${Styles.container}`}`}>
      <header>
        <div className={Styles.item} id={Styles.title}>
          <h1>Nome do Projeto</h1>
        </div>
        <div className={Styles.item}>
          <h2>UI Design</h2>
          <div className={Styles.mark}>
            <p>D</p>
            <p>H</p>
            <p>M</p>
            <p>S</p>
          </div>
        </div>
        <div className={Styles.item}>
          <h2>Front-End</h2>
          <div className={Styles.mark}>
            <p>D</p>
            <p>H</p>
            <p>M</p>
            <p>S</p>
          </div>
        </div>
        <div className={Styles.item}>
          <h2>Back-End</h2>
          <div className={Styles.mark}>
            <p>D</p>
            <p>H</p>
            <p>M</p>
            <p>S</p>
          </div>
        </div>
        <div className={Styles.item}>
          <h2>DevOps</h2>
          <div className={Styles.mark}>
            <p>D</p>
            <p>H</p>
            <p>M</p>
            <p>S</p>
          </div>
        </div>
        <div className={Styles.item}>
          <h2>Deadline</h2>
          <div className={Styles.mark}>
            <p>Prazo final do projeto.</p>
          </div>
        </div>
      </header>
      <div className={Styles.body}>
        {data.length === 0 ? (
          <h1 className={Styles.loading}>Loading...</h1>
        ) : (
          data.map(project => {
            return (
              <ItemGrup
                key={project.id}
                id={project.id}
                projectName={project.name}
                deadline={project.deadline}
              />
            );
          })
        )}
      </div>
      <div className={Styles.conteudo}></div>
    </div>
  );
}
