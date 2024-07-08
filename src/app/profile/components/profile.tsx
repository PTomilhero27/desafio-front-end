"use client";
import React from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
const user = {
  firstName: "Pedro",
  lastName: "Tomilhero",
  email: "ptomilhero27@gmail.com",
  phone: "5511941780315",
  jobTitle: "Desenvolvedor FullStack",
  avatar: "https://avatars.githubusercontent.com/u/70902978?v=4",
  about: `<p>Sou um programador altamente motivado e versátil, tenho facilidade em aprender e me adaptar rapidamente a novas tecnologias, o que me permite enfrentar projetos desafiadores com confiança e eficiência. Ao longo da minha carreira, desenvolvi uma sólida experiência em Angular, partindo do zero e me tornando um programador experiente nessa tecnologia.</p>
    <p>Além disso, minha experiência em outras tecnologias ampliou meu conjunto de habilidades e me permitiu atuar em diferentes áreas do desenvolvimento de software. Estou sempre aberto a aprender coisas novas e buscar desafios que promovam meu crescimento profissional. Tenho um aprendizado contínuo, acompanhando as últimas tendências e avanços no campo da programação. Sou apaixonado por adquirir novos conhecimentos e aplicá-los em projetos práticos.</p>
    <p>Meu entusiasmo por desafios me impulsiona a trabalhar de forma independente, encontrando soluções criativas e eficientes para problemas complexos. Resumindo, minha sólida experiência em Angular demonstra minha versatilidade como programador. Estou preparado para enfrentar novos desafios, adquirir novas habilidades e contribuir para o sucesso de projetos de programação estimulantes.</p>
    <p>Tecnologias:</p>
    <ul>
      <li>
        <strong>Front-end (Intermediário/Avançado):</strong>
        Angular, RxJS, NgRx, JavaScript (TypeScript), CSS3 (SCSS, Tailwind), React, React Native, Next.js, Vue.
      </li>
      <li>
        <strong>Back-end (Iniciante/Intermediário):</strong>
        Conhecimentos em Spring Boot, MySQL, Node.js, Nest.js, Prisma, REST, Clean Architecture, SOLID, DDD.
      </li>
      <li>
        <strong>DevOps (Iniciante):</strong>
        GitLab, Azure, AWS.
      </li>
      <li>
        <strong>Design e UX/UI:</strong>
        Figma.
      </li>
      <li>
        <strong>Testes Unitários:</strong>
        Experiência em testes unitários.
      </li>
    </ul>
    `,
};

const UserProfile = () => {
  const getWhatsAppLink = (phoneNumber: string) => {
    return phoneNumber.replace(/[^0-9]/g, "");
  };
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="container max-w-2xl bg-white p-8 shadow-lg rounded-lg">
        <ArrowLeft
          className="mb-4 cursor-pointer"
          onClick={handleBackClick}
          width={20}
          height={20}
        />
        <div className="card">
          <h2 className="text-2xl font-bold">{`${user.firstName} ${user.lastName}`}</h2>
          <h4 className="text-lg text-gray-600">{user.jobTitle}</h4>
          <div className="user-info flex items-center mt-4">
            <div className="user-details ml-6">
              <div className="content-group mb-4">
                <h3 className="font-semibold">E-mail:</h3>
                <a href={`mailto:${user.email}`} className="text-blue-500">
                  <p>{user.email}</p>
                </a>
              </div>

              <div className="content-group mb-4">
                <h3 className="font-semibold">Telefone:</h3>
                <a
                  href={`https://wa.me/${getWhatsAppLink(user.phone)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  <p>{user.phone}</p>
                </a>
              </div>

              <div className="content-group mb-4">
                <h3 className="font-semibold">Sobre:</h3>
                <div dangerouslySetInnerHTML={{ __html: user.about }}></div>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <Image
                  src={user.avatar}
                  alt={`${user.firstName} ${user.lastName}`}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <a
                  href="https://www.linkedin.com/in/pedro-tomilhero-2696981b5/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-2 px-4 rounded">
                    LinkedIn
                  </button>
                </a>
                <a
                  href="https://github.com/PTomilhero27"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-2 px-4 rounded">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
