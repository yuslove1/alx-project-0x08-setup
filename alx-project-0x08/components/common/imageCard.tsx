import { GeneratedImageProps } from "@/interfaces";

const ImageCard: React.FC<GeneratedImageProps> = ({ imageUrl, prompt, width, action }) => {
  return (
    <div
      onClick={() => action(imageUrl)} // Call the provided action function when the card is clicked, passing the imageUrl
      className="mt-6 border hover:cursor-pointer"
    >
      <img
        src={imageUrl} // Display the image using the provided URL
        alt={prompt} // Set the alt text to the prompt
        className={`w-full max-w-md rounded-lg shadow-lg`} // Make the image responsive, add rounded corners and a shadow
      />
      <h2 className={`${width ? 'text-sm' : 'text-xl'} font-semibold mt-2`}>
        {/* Conditionally set the heading size based on the 'width' prop */}
        Your Prompt:
      </h2>
      <p className={`${width ? 'text-xs' : 'text-lg'} text-gray-700 mb-4`}>
        {/* Conditionally set the paragraph size based on the 'width' prop */}
        {prompt} {/* Display the prompt text */}
      </p>
    </div>
  );
};

export default ImageCard;