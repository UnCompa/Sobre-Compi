import { Spinner } from "@nextui-org/react";

function Loader() {
  return (
    <div className="w-full container mx-auto grid place-content-center">
      <Spinner size="lg" color="secondary" label="Cargando" />
    </div>
  );
}

export default Loader;
