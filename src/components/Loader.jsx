/* eslint-disable react/prop-types */
import { Spinner } from "@nextui-org/react";

function Loader({text = "Cargando"}) {
  return (
    <div className="w-full py-4 container mx-auto grid place-content-center">
      <Spinner size="lg" color="secondary" label={text} />
    </div>
  );
}

export default Loader;
