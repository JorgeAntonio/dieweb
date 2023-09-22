import { ImageSection } from "../ImageSection";

export default function ProblemSection() {
  return (
    <div className="py-4 md:py-16">
      <ImageSection
        isLeft={true}
        image={
          "https://scontent.fiqt3-1.fna.fbcdn.net/v/t39.30808-6/351332367_234468359320205_7042863811796618700_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=813123&_nc_eui2=AeEbVvfbsYMF8u7ogTFOWXdvuI53jGdzvKW4jneMZ3O8pRdg-O1vmGoeR0bCaTQgyZt6UPww28f3vfan-ufyhszo&_nc_ohc=iDnzvklZEysAX_0zrBb&_nc_oc=AQkbjBo2tP0nFJJfP8u2GF-z5_piJs8urPoWThypyYhAvcF_EuKSloRb24I-jZQCiPgSj5lYxwQNz2eAfQvj_b1P&_nc_zt=23&_nc_ht=scontent.fiqt3-1.fna&oh=00_AfD4tK9a2gSB9wPZVPX-2IN1154JVwmS6xt2VKSBwOU4jg&oe=65119100"
        }
      >
        <h1 className="text-3xl font-medium text-center md:text-start mb-8 uppercase">
          El Desafío
        </h1>
        <h2 className="text-xl font-medium text-start mb-8">
          Emprender sin orientación
        </h2>
        <p className="text-sm md:text-base lg:text-xl">
          Muchas personas tienen una idea de negocio, pero no saben por dónde
          empezar. No tienen experiencia en el mundo empresarial y no saben qué
          pasos deben seguir para convertir su idea en realidad. Esto puede
          resultar en una gran cantidad de tiempo y dinero desperdiciado.
        </p>
        <br />
        <p className="text-sm md:text-base lg:text-xl">
          Iniciar un negocio sin una guía adecuada puede ser extremadamente
          difícil. Muchos emprendedores se enfrentan a obstáculos y desafíos que
          podrían haberse evitado con el apoyo adecuado y una dirección clara.
        </p>
      </ImageSection>
    </div>
  );
}
