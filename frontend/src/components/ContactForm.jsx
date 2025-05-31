<<<<<<< HEAD
import { useForm } from "react-hook-form";
import axios from "axios";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:8008/api/contact", data);
  
      if (response.status === 201) {
        alert("Message envoyé avec succès !");
        reset(); // Vide le formulaire
      } else {
        alert(response.data.message || "Une erreur est survenue.");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error); // Affiche l’erreur
      alert("Erreur serveur."); // Affiche un message à l’utilisateur
    }
  };
  

=======
// import { useForm } from "react-hook-form";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ContactForm = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = (data) => {
  //   console.log("Form Submitted:", data);
  // };
  // Ajoutez ici votre logique d'envoi (e.g., API call)
>>>>>>> celia/branch_celia

  return (
    <div>
      <div className="bg-[#FCE5C2] rounded-[40px] my-20 mx-14 py-16 px-4 md:px-0">
        <h2 className="text-center text-3xl md:text-4xl font-semibold font-fredoka text-black mb-10">
          CONTACT
        </h2>
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl mx-auto p-8">
<<<<<<< HEAD
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
=======
          <form className="flex flex-col gap-6">
>>>>>>> celia/branch_celia
            <div>
              <label htmlFor="nom" className="block mb-2 text-sm font-medium">
                Nom
              </label>
              <input
                type="text"
                id="nom"
<<<<<<< HEAD
                {...register("nom", { required: "Le nom est requis" })}
                placeholder="Charlene Reed"
                className="w-full border border-gray-300 text-sm rounded-md p-3 bg-gray-50"
              />
              {errors.nom && <p className="text-red-500 text-sm mt-1">{errors.nom.message}</p>}
            </div>
            <div>
              <label htmlFor="prenom" className="block mb-2 text-sm font-medium">
                Prénom
=======
                placeholder="Charlene Reed"
                className="w-full border border-gray-300 text-sm rounded-md p-3 bg-gray-50"
              />
            </div>
            <div>
              <label
                htmlFor="prenom"
                className="block mb-2 text-sm font-medium"
              >
                Prenom
>>>>>>> celia/branch_celia
              </label>
              <input
                type="text"
                id="prenom"
<<<<<<< HEAD
                {...register("prenom", { required: "Le prénom est requis" })}
                placeholder="Charlene"
                className="w-full border border-gray-300 text-sm rounded-md p-3 bg-gray-50"
              />
              {errors.prenom && <p className="text-red-500 text-sm mt-1">{errors.prenom.message}</p>}
=======
                placeholder="Charlene Reed"
                className="w-full border border-gray-300 text-sm rounded-md p-3 bg-gray-50"
              />
>>>>>>> celia/branch_celia
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
<<<<<<< HEAD
                {...register("email", {
                  required: "L'email est requis",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Email invalide",
                  },
                })}
                placeholder="charlenereed@gmail.com"
                className="w-full border border-gray-300 text-sm rounded-md p-3 bg-gray-50"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">
=======
                placeholder="charlenereed@gmail.com"
                className="w-full border border-gray-300 text-sm rounded-md p-3 bg-gray-50"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium"
              >
>>>>>>> celia/branch_celia
                Message
              </label>
              <textarea
                id="message"
                rows="4"
<<<<<<< HEAD
                {...register("message", { required: "Le message est requis" })}
                className="w-full border border-gray-300 text-sm rounded-md p-3 bg-gray-50"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
=======
                placeholder=""
                className="w-full border border-gray-300 text-sm rounded-md p-3 bg-gray-50"
              ></textarea>
>>>>>>> celia/branch_celia
            </div>
            <button
              type="submit"
              className="bg-black text-white text-sm font-medium py-3 rounded-md"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
