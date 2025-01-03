import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, JSX } from "react";
import { useAppStore } from "../stores/useAppStore";
import { Recipe } from "../types";

export default function Modal() {
  const modal = useAppStore((state) => state.modal);
  const closeModal = useAppStore((state) => state.closeModal);
  const selectedRecipe = useAppStore((state) => state.selectedRecipe);
  // se crea esta funcion para renderizar los ingredientes y cantidades ya que en la api vienen de forma separada y no se puede hacer un map, aparte de que no se sabe cuantos ingredientes tiene cada receta por lo que se hace un for para recorrer los 15 ingredientes de la API que se pueden tener
  const renderIngredients = () => {
    // se crea un array de elementos JSX para poder renderizar los ingredientes
    const ingredientes: JSX.Element[] = [];
    // se recorren los 15 ingredientes que se pueden tener en la API
    for (let i = 1; i <= 15; i++) {
      // se obtiene el ingrediente y la cantidad de la receta seleccionada en la API, se hace un cast as keyof Recipe para que no haya error en la compilacion ya que se esta accediendo a una propiedad dinamica, este va y busca la propiedad que se le pase en el objeto Recipe
      const ingredient = selectedRecipe[`strIngredient${i}` as keyof Recipe];
      const measure = selectedRecipe[`strMeasure${i}` as keyof Recipe];
      // si el ingrediente existe se agrega al array de ingredientes para renderizarlo en el modal por medio de una lista
      if (ingredient && measure) {
        ingredientes.push(
          <li key={i} className="text-lg font-normal">
            {measure} - {ingredient}
          </li>,
        );
      }
    }
    return ingredientes;
  };

  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                  <DialogTitle
                    as="h3"
                    className="my-5 text-center text-4xl font-extrabold text-gray-900"
                  >
                    {selectedRecipe.strDrink}
                  </DialogTitle>
                  <img
                    src={selectedRecipe.strDrinkThumb}
                    alt={`imagen de ${selectedRecipe.strDrink}`}
                    className="mx-auto w-96"
                  />
                  <DialogTitle
                    as="h3"
                    className="my-5 text-2xl font-extrabold text-gray-900"
                  >
                    Ingredientes y Cantidades
                  </DialogTitle>
                  {renderIngredients()}
                  <DialogTitle
                    as="h3"
                    className="my-5 text-2xl font-extrabold text-gray-900"
                  >
                    Instrucciones
                  </DialogTitle>
                  {selectedRecipe.strInstructions}
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
