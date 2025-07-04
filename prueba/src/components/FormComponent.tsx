interface FormComponentProps {
  refran: string;
  setRefran: (refran: string) => void;
  setRefranes: (refran: string[]) => void;
}
export const FormComponent = ({
  refran,
  setRefran,
  setRefranes,
}: FormComponentProps) => {
  const addRefran = () => {
    // setRefranes((prevRefranes) => [...prevRefranes, refran]);
    setRefran("");
  };
  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 my-4">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <form className="space-y-4 md:space-y-6" action="#">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Refran del Minibusero
            </label>
            <input
              type="text"
              name="refran"
              value={refran}
              id="refran"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Ingrese las palabras sabias del minibusero"
              onChange={(e) => setRefran(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-amber-900 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            onClick={addRefran}
          >
            Agregar Refran
          </button>
        </form>
      </div>
    </div>
  );
};