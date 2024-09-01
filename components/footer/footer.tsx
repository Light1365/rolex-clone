import { FaXTwitter } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-full w-full">
      <div
        className="flex flex-row w-full bg-green-500	items-center list-none"
        style={{ height: 96 }}
      >
        <li>
          <span className="flex flex-row gap-5 text-white bg-yellow-500 ml-16">
            Compartilhar
            <button className="bg-red-500 opacity-50 hover:opacity-100">
              <svg
                className="undefined css-1emgvlg e10fsun60"
                height="20"
                width="20"
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-hidden="true"
              >
                <path d="M8.9,6.4l5.4-6.3H13L8.3,5.5L4.6,0.1H0.2l5.7,8.3l-5.7,6.6h1.3l5-5.8l4,5.8h4.3L8.9,6.4L8.9,6.4z M7.1,8.4L6.5,7.6L2,1h2l3.7,5.3l0.6,0.8L13,14h-2L7.1,8.4L7.1,8.4z"></path>
              </svg>
            </button>
            <button className="bg-green-500">
              <svg
                className="undefined css-1emgvlg e10fsun60"
                height="20"
                width="20"
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-hidden="true"
              >
                <path d="m11.5 0v2.25h-2.93c-.31 0-.57.32-.57.63v1.62h3.25l-.61 2.25h-2.64v8.25h-2.25v-8.25h-2.25v-2.25h2.25v-1.75c0-1.59 1.17-2.75 2.75-2.75z"></path>
              </svg>
            </button>
            <button className="bg-blue-500">
              <svg
                className="undefined css-1emgvlg e10fsun60"
                height="20"
                width="20"
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-hidden="true"
              >
                <path d="m13.5 5.34c0 3.18-2.04 5.75-4.87 5.75-.95 0-1.85-.49-2.15-1.06 0 0-.47 1.76-.59 2.2-.19.71-.65 1.57-1.02 2.18-.03.05-.06.11-.1.16-.02.03-.04.05-.05.08-.12.15-.25.29-.39.35 0 0-.16-.13-.25-.58 0-.03-.02-.07-.02-.1-.01-.09-.02-.19-.03-.3 0 0 0 0 0-.01-.06-.7-.08-1.58.07-2.24.17-.72 1.1-4.59 1.1-4.59s-.27-.56-.27-1.38c0-1.29.76-2.24 1.7-2.24.8 0 1.19.59 1.19 1.3 0 .79-.51 1.98-.78 3.08-.22.92.47 1.67 1.39 1.67 1.67 0 2.95-1.73 2.95-4.23 0-2.21-1.62-3.76-3.92-3.76-2.67 0-4.24 1.97-4.24 4.01 0 .79.31 1.65.7 2.11.07.09.08.17.06.26-.07.29-.23.92-.26 1.05-.04.17-.13.2-.31.12-1.18-.54-1.91-2.22-1.91-3.58 0-2.91 2.15-5.59 6.21-5.59 3.26 0 5.79 2.28 5.79 5.34z"></path>
              </svg>
            </button>
            <button className="bg-yellow-500">
              <svg
                className="undefined css-1emgvlg e10fsun60"
                height="20"
                width="20"
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-hidden="true"
              >
                <path d="m15 8.91v5.74h-3.1v-5.36c0-1.34-.47-2.26-1.6-2.26-.86 0-1.39.62-1.62 1.22-.07.21-.11.51-.11.81v5.59h-3.1s.04-9.05 0-10h3.1v1.41c0 .01.01.01 0 .01v-.01c.48-.68 1.17-1.66 2.83-1.66 2.05 0 3.6 1.43 3.6 4.51zm-13.32-8.55c-1.02 0-1.68.72-1.68 1.66 0 .93.64 1.67 1.64 1.67h.02c1.03 0 1.68-.74 1.68-1.67-.03-.94-.65-1.66-1.66-1.66zm-1.44 14.28h2.86v-10h-2.86z"></path>
              </svg>
            </button>
            <button className="bg-pink-500">
              <svg
                className="undefined css-1emgvlg e10fsun60"
                height="20"
                width="20"
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-hidden="true"
              >
                <path d="m11.07 7.59c-.25-.09-.33-.09-.25-.44.25-.62.25-1.24 0-1.59-.49-.71-1.8-.71-3.28 0 0 0-.49.27-.33-.18.25-.8.16-1.51-.16-1.86-.82-.89-2.95 0-4.84 2.04-1.39 1.5-2.21 3.09-2.21 4.51 0 2.66 3.11 4.43 6.15 4.43 4.02 0 6.64-2.75 6.64-4.7.08-1.24-.9-1.95-1.72-2.21zm-4.84 5.67c-2.46.27-4.51-.97-4.67-2.66-.17-1.77 1.64-3.37 4.1-3.63 2.46-.27 4.51.89 4.67 2.66s-1.64 3.36-4.1 3.63zm8.77-7.89c0-2.66-2.05-4.87-4.51-4.87-.33 0-.49.27-.49.53 0 .35.25.53.49.53 1.89 0 3.44 1.68 3.44 3.72 0 .35.25.53.49.53.42.18.58-.08.58-.44zm-2.05-.09c-.25-1.24-1.15-2.3-2.38-2.57-.24-.08-.57.18-.65.45s.16.62.41.71c.74.18 1.39.8 1.56 1.68.08.27.33.53.66.44.24-.08.48-.35.4-.71zm-7.95 3.46c-.98.18-1.64 1.06-1.48 1.95s1.07 1.42 2.05 1.24 1.64-1.06 1.48-1.95c-.16-.97-1.07-1.51-2.05-1.24z"></path>
              </svg>
            </button>
            <button className="bg-gray-500">
              <svg
                className="undefined css-1emgvlg e10fsun60"
                height="20"
                width="20"
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-hidden="true"
              >
                <path d="m7.94.01c-.81-.07-1.36.51-1.43 1.29s.36 1.46 1.17 1.53 5.97.83 7.17 6.17c.05-.26.09-.52.11-.78.39-4.16-2.75-7.84-7.02-8.21zm-2.77 7.95c-.2.53-.23 1.04-.07 1.13.11.06.28-.08.44-.35.06.3.22.56.45.78-.24.09-.39.25-.39.44 0 .3.42.54.93.54.46 0 .85-.2.92-.46h.11c.07.26.45.46.92.46.51 0 .93-.24.93-.54 0-.18-.15-.34-.39-.44.22-.22.38-.49.44-.78.16.27.33.41.44.35.16-.09.13-.6-.07-1.13-.16-.41-.37-.72-.53-.78 0-.03 0-.05 0-.08 0-.16-.04-.31-.11-.43 0-.01 0-.02 0-.03 0-.07-.02-.14-.04-.2-.03-1.08-.65-1.94-1.65-1.94s-1.62.86-1.66 1.94c-.03.06-.04.12-.04.2v.03c-.07.12-.11.27-.11.43v.08c-.15.06-.36.37-.52.78zm8.53 3.54c.45-.67.19-1.44-.46-1.88s-1.45-.37-1.9.3-3.58 4.85-8.84 3.36c.2.17.41.32.63.47 3.47 2.32 8.21 1.31 10.57-2.25zm-12.98-.55c.34.74 1.12.93 1.84.61.71-.32 1.09-1.04.75-1.77-.34-.74-2.23-5.61 1.82-9.29-.25.08-.49.18-.74.29-3.81 1.71-5.45 6.27-3.67 10.16z"></path>
              </svg>
            </button>
            <button className="bg-white-900">
              <svg
                className="undefined css-1emgvlg e10fsun60"
                height="20"
                width="20"
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-hidden="true"
              >
                <path d="m15 1.25v1.25h-15v-1.25zm-4.38 11.25h4.38v1.25h-15v-1.25h4.37l-1.24-3.75h-.63-1.25v-1.25-2.5-1.25h1.25 10 1.25v5h-1.25-.63zm1.88-5v-2.5h-10v2.5zm-1.88 1.25h-6.24l1.25 3.75h3.75z"></path>
              </svg>
            </button>
          </span>
        </li>
      </div>
      <div className="grid grid-cols-4 gap-4 pt-14 pb-11 p-36 pl-16">
        <section className="w-full h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 103 59"
            aria-hidden="true"
            height="50px"
          >
            <path
              d="M39.4,10.7c0.2,0,0.3,0,0.4-0.1L45,28h0c0.6,1.9,3.4,3.4,6.8,3.4c3.4,0,6.2-1.5,6.8-3.4h0l5.1-17.4c0.1,0,0.3,0,0.4,0c1,0,1.8-0.8,1.8-1.8c0-1-0.8-1.8-1.8-1.8c-1,0-1.8,0.8-1.8,1.8c0,0.7,0.4,1.3,1,1.6l-5.9,12.7l1-17.1c0,0,0,0,0,0c1,0,1.8-0.8,1.8-1.8c0-1-0.8-1.8-1.8-1.8c-1,0-1.8,0.8-1.8,1.8c0,0.8,0.6,1.5,1.3,1.7l-3.9,16.7L52,4.3c0.9-0.1,1.5-0.9,1.5-1.8c0-1-0.8-1.8-1.8-1.8c-1,0-1.8,0.8-1.8,1.8c0,0.9,0.7,1.7,1.5,1.8l-1.9,18.4L45.7,6C46.5,5.8,47,5.1,47,4.3c0-1-0.8-1.8-1.8-1.8c-1,0-1.8,0.8-1.8,1.8c0,1,0.8,1.8,1.8,1.8c0,0,0,0,0,0l1,17.1l-5.9-12.7c0.6-0.3,1-0.9,1-1.6c0-1-0.8-1.8-1.8-1.8c-1,0-1.8,0.8-1.8,1.8C37.6,9.9,38.4,10.7,39.4,10.7z M51.8,26.5c3.1,0,5.6,0.8,5.6,1.8c0,1-2.5,1.8-5.6,1.8c-3.1,0-5.6-0.8-5.6-1.8C46.1,27.3,48.7,26.5,51.8,26.5z"
              fill="rgba(163, 126, 44, 1)"
            ></path>
            <g fill="rgba(0, 96, 57, 1)">
              <path d="M19.6,55.2l-1.1-3.3c-0.5-1.5-0.9-2.1-1.7-2.9c-0.5-0.5-1.3-0.7-1.9-0.9c2.1-0.3,3.7-2.2,3.7-4.4c0-2.4-2-4.4-4.4-4.4c0,0-0.1,0-0.1,0v0H7.4h-4H1v1.3h2.4v14.6H0.9v1.3h6.4l0,0h2.5v-1.3H7.4v-7h1.9c0.1,0,0.1,0,0.2,0h0.4c0.6,0,1.1,0.1,1.6,0.2c0.4,0.1,0.9,0.3,1.2,0.5c0.4,0.3,0.9,0.7,1.3,1.3c0.1,0.2,0.2,0.4,0.3,0.5c0.7,1.4,1.2,3.3,1.7,5.7h3v0h2.7v-1.3L19.6,55.2L19.6,55.2z M11.6,46.9H7.4v-6.3h4.2c1.8,0.1,3.2,1.3,3.2,3.1S13.4,46.8,11.6,46.9z"></path>
              <path d="M31.9,38.7c-5.2,0-9.3,4.2-9.3,9.2c0,5,4.2,9.2,9.3,9.2c5.2,0,9.3-4.2,9.3-9.2C41.2,42.9,37.1,38.7,31.9,38.7zM35.8,53.2c-0.3,0.4-0.7,0.8-1.1,1.1c-0.7,0.5-1.5,0.9-2.3,0.9c-0.2,0-0.3,0-0.5,0c-0.2,0-0.3,0-0.5,0c-0.8,0-1.6-0.4-2.3-0.9c-0.4-0.3-0.8-0.7-1.1-1.1c-1-1.3-1.6-3.2-1.6-5.3c0-2,0.5-3.7,1.4-5.1c0.5-0.9,1.2-1.6,2.2-2c0,0,0,0,0,0c0,0,0.1,0,0.1-0.1c0.1-0.1,0.2-0.1,0.4-0.1c0.4-0.1,0.9-0.2,1.3-0.2c0.5,0,0.9,0.1,1.3,0.2c0.1,0,0.3,0.1,0.4,0.1c0,0,0.1,0,0.1,0.1c0,0,0,0,0,0c0.9,0.4,1.7,1.1,2.2,2c0.9,1.3,1.4,3.1,1.4,5.1C37.4,50,36.8,51.9,35.8,53.2z"></path>
              <path d="M59.7,49.8h-1.3v2.6c0,1.6-1.3,2.8-2.9,2.8c0,0,0,0,0,0v0h-4h-1.5V40.6h2.5v-1.3h-2.5l0,0h-0.3h-6.2v1.3h2.5v14.6h-2.5v1.3h14.9h1.1h0.1h0.1v0h0v-4.2h0V49.8z"></path>
              <path d="M79.5,39.4L79.5,39.4h-0.1h-4H62.5v1.3h2.5v14.6h-2.5v1.3v0h12.9h2.9h1.1h0.1h0h0.1v-4.2v-1.9h-1.3v2l0,0c0,1.6-1.3,2.8-2.9,2.8c0,0,0,0,0,0v0h-4.6v0H69h-0.1v-7V48h1.3c0,0,0,0,0,0H71l0,0c1.2,0,2.1,1,2.1,2.1c0,0,0,0,0,0h0v0.7l0,0v0.3h1.2V51V48v0v-1.1v0V44v-0.1h-1.2v0.8h0c0,0,0,0,0,0c0,1.2-0.9,2-2.1,2l0,0h-0.8h-0.8h-0.5v-6.2H69h3.7c0,0,0,0,0.1,0h2.6c1.6,0,2.8,1.3,2.9,2.8l0,0v1.8h1.3v-1.7L79.5,39.4L79.5,39.4L79.5,39.4z"></path>
              <path d="M101.8,55.3c-1.2,0-1.5-0.4-2.5-1.5l-5.7-7.1l3.8-4.5v0c1-1.2,1.3-1.6,2.6-1.6h0.8h0.2v-1.3h-0.2H97h-0.2h-2.7H94v1.3h0.2h1.4v0c0,0,0,0,0,0c0.3,0,0.6,0.3,0.6,0.6c0,0.1,0,0.2-0.1,0.3l-3.3,4L90,42.3l-0.5-0.7c-0.1-0.1-0.1-0.2-0.1-0.4c0-0.3,0.3-0.6,0.6-0.6h1.5v-1.3h-2.7h-3.9h-2.1v1.3h0.4c1.1,0.1,1.4,0.4,2.3,1.4l5,6.3L86,53.7v0c-1,1.2-1.3,1.6-2.6,1.6h-0.8h-0.3v1.3h0.3h4.3h0.3h2.3h0.3v-1.3h-0.3h-1.6v0c0,0,0,0,0,0c-0.3,0-0.6-0.3-0.6-0.6c0-0.1,0.1-0.3,0.1-0.4l4-4.8l3.3,4.2l0.5,0.6c0.1,0.1,0.1,0.2,0.1,0.4c0,0.3-0.3,0.6-0.6,0.6c0,0,0,0,0,0l0,0h-1.6v1.3h0v0h9.3v-1.3L101.8,55.3L101.8,55.3z"></path>
            </g>
          </svg>
        </section>
        <div className="w-full h-full bg-gray-500	">
          <ul className=" bg-pink-500 justify-center auto">
            <ul>
              <li className="bg-blue-500">
                <a href="" className="text-white text-2xl">
                  Relógios Rolex
                </a>
                <ul>
                  <li className="text-base">
                    <a href="">Novos Modelos 2024</a>
                  </li>
                  <li>
                    <a href="">Encontre o seu Rolex</a>
                  </li>
                  <li>
                    <a href="">Configure o seu Rolex</a>
                  </li>
                  <li>
                    <a href="">Relógios masculinos</a>
                  </li>
                  <li>
                    <a href="">Relógios femininos</a>
                  </li>
                  <li>
                    <a href="">Relógios em ouro</a>
                  </li>
                </ul>
              </li>
              <li className="bg-purple-500 gap-8 mt-4">
                <a href="" className="text-white text-2xl">
                  {" "}
                  Coleção
                </a>
                <ul>
                  <li className="text-base">
                    <a href="">Air-King</a>
                  </li>
                  <li>
                    <a href="">Cosmograph Daytona</a>
                  </li>
                  <li>
                    <a href="">Datejust</a>
                  </li>
                  <li>
                    <a href="">Lady-Datejust</a>
                  </li>
                  <li>
                    <a href="">Day-Date</a>
                  </li>
                  <li>
                    <a href="">Explorer</a>
                  </li>
                  <li>
                    <a href="">GMT-Master II</a>
                  </li>
                  <li>
                    <a href="">Oyster Perpetual</a>
                  </li>
                  <li>
                    <a href="">Sea-Dweller</a>
                  </li>
                  <li>
                    <a href="">Deepsea</a>
                  </li>
                  <li>
                    <a href="">Sky-Dweller</a>
                  </li>
                  <li>
                    <a href="">Submariner</a>
                  </li>
                  <li>
                    <a href="">Yacht-Master</a>
                  </li>
                  <li>
                    <a href="">1908</a>
                  </li>
                </ul>
              </li>
              <li className="bg-yellow-500 gap-8 mt-4">
                <a href="" className="text-white text-2xl">
                  A arte da relojoaria
                </a>
                <ul>
                  <li>
                    <a href="">No cerne da excelência</a>
                  </li>
                  <li>
                    <a href="">Por trás do selo</a>
                  </li>
                  <li>
                    <a href="">Anatomia de um Rolex</a>
                  </li>
                </ul>
              </li>
            </ul>
          </ul>
        </div>
        <ul>
          <li>
            <ul className="bg-pink-500">
              <li>
                <a href="" className="text-white text-2xl">
                  A Rolex e os esportes
                </a>
              </li>
              <li>
                <a href="">Tênis</a>
              </li>
              <li>
                <a href="">Golfe</a>
              </li>
              <li>
                <a href="">Iatismo</a>
              </li>
              <li>
                <a href="">Automobilismo</a>
              </li>
              <li>
                <a href="">Hipismo</a>
              </li>
            </ul>
          </li>
          <li>
            <ul className="bg-green-500 mt-4">
              <li>
                <a href="" className="text-white text-2xl">
                  Iniciativas Perpetual
                </a>
              </li>
              <li>
                <a href="">Iniciativa Perpetual Planet</a>
              </li>
              <li>
                <a href="">Iniciativa Perpetual Arts</a>
              </li>
            </ul>
            <ul className="bg-orange-500 mt-4">
              <li>
                <a href="" className="text-white text-2xl">
                  Sobre a Rolex
                </a>
              </li>
              <li>
                <a>Desenvolvimento sustentável</a>
              </li>
              <li>
                <a>Por trás da coroa</a>
              </li>
              <li>
                <a>História</a>
              </li>
            </ul>
            <ul className="bg-red-500 mt-4">
              <li>
                <a href="" className="text-white text-2xl">
                  A compra de um Rolex
                </a>
              </li>
              <li>
                <a>Distribuidores oficiais</a>
              </li>
              <li>
                <a>A compra de um Rolex</a>
              </li>
              <li>
                <a>Rolex Certified Pre-Owned</a>
              </li>
            </ul>
            <ul className="bg-blue-500 mt-4">
              <li>
                <a href="" className="text-white text-2xl">
                  Cuidado e manutenção
                </a>
              </li>
              <li>
                <a>Centros de serviço</a>
              </li>
              <li>
                <a>Cuidado e manutenção</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="bg-violet-500">
          <li>
            <li>
              <a href="" className="text-white text-2xl">
                Serviços
              </a>
            </li>
            <li>
              <a href="">Perguntas frequentes</a>
            </li>
            <li>
              <a href="">Seus favoritos</a>
            </li>
            <li>
              <a href="">Submeter uma denúncia</a>
            </li>
            <li>
              <a href="">Newsroom</a>
            </li>
          </li>
          <ul className="bg-yellow-500 mt-4">
            <li>
              <a href="" className="text-white text-2xl">
                Aviso legal
              </a>
              <li>
                <a>Termos de uso</a>
              </li>
              <li>
                <a>Políticas de privacidade</a>
              </li>
              <li>
                <a>Cookies</a>
              </li>
            </li>
          </ul>
          <ul className="bg-purple-500 mt-4">
            <li>
              <a href="" className="text-white text-2xl">
                Acessibilidade
              </a>
              <li>
                <a>Leia nossa declaração</a>
              </li>
            </li>
          </ul>
          <ul className="bg-green-500 mt-4">
            <li>
              <a href="" className="text-white text-2xl">
                Suportes de comunicação
              </a>
              <li>
                <a>Wallpapers</a>
              </li>
              <li>
                <a>Catálogos</a>
              </li>
              <li>
                <a>Guias do usuários</a>
              </li>
            </li>
          </ul>
          <ul className="bg-orange-500 mt-4">
            <li>
              <a href="" className="text-white text-2xl font-helvetica">
                Canais oficiais
              </a>
              <li>
                <a>Facebook</a>
              </li>
              <li>
                <a>Instagram</a>
              </li>
              <li>
                <a>X</a>
              </li>
              <li>
                <a>Youtube</a>
              </li>
              <li>
                <a>Pinterest</a>
              </li>
              <li>
                <a>Linkedin</a>
              </li>
              <li>
                <a>Youku</a>
              </li>
              <li>
                <a>Weibo</a>
              </li>
              <li>
                <a>WeChat</a>
              </li>
            </li>
          </ul>
        </ul>
      </div>
      <div className="bg-gray-400 w-full flex flex-column justify-center items-center h-px"></div>
      <div className="bg-gray-300">
        <div className="h-20 flex flex-row items-center ml-10 justify-between">
          <a className="flex flex-row items-center hover:cursor-pointer gap-2">
            <FaGlobeAmericas size={20} />
            Idiomas
          </a>
          <div className="flex flex-row items-center justify-between w-80 mr-10">
            <button className="">Reduzir movimento</button>
            <button>Ativar contraste</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
