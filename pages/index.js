import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { overlay } from "../styles/Home.module.scss";

export default function Home() {
  const {
    currentTheme: { primary, secondary },
    toggleDarkMode,
  } = useContext(ThemeContext);

  return (
    <div>
      <h1>Hello World</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis,
        quas molestias? Repudiandae, corrupti unde! Architecto animi placeat ex
        nulla esse reiciendis, dignissimos quo maxime omnis culpa minus est
        iusto similique modi aut quibusdam ipsum? Praesentium odio officiis
        impedit natus ea illum deserunt, quae tenetur ipsa accusantium ipsam
        consectetur voluptates, laudantium obcaecati. Maxime ipsam laborum,
        omnis ut eos explicabo vitae? Obcaecati nisi aut perspiciatis omnis!
        Necessitatibus sint veritatis aliquid excepturi consequatur, fugit
        inventore ut laboriosam sapiente numquam dolorem dolor amet cupiditate
        dolores praesentium voluptate magnam! Qui sunt accusamus doloribus
        eligendi provident distinctio exercitationem eum officiis accusantium,
        quaerat veniam quos, nesciunt ipsum ducimus est dignissimos cumque
        perspiciatis repellendus sed, ratione officia ullam vel! Harum minus
        vitae officiis debitis libero! Qui saepe suscipit accusamus tenetur
        ullam perferendis consequuntur adipisci debitis molestias sunt sapiente,
        veritatis minus cumque vel sequi eius! Officia illum quo aliquam,
        dolores veniam ex sapiente eius molestias nesciunt cumque eum voluptatem
        nam. Illum corrupti voluptates, eos consequuntur dolores nulla ipsum
        quaerat deserunt architecto quisquam similique dolore unde? Quae ipsum
        corrupti magnam voluptatum maxime similique magni dolore provident
        veritatis esse repudiandae assumenda asperiores ab accusamus odit,
        placeat expedita. Alias consectetur ipsa facere. Rerum repudiandae
        officiis ratione harum qui obcaecati, ipsam voluptatibus eum.
      </p>
    </div>
  );
}
