import { ImageProps } from "@/interfaces";
import { useState } from "react";
import ImageCard from "@/components/common/imageCard";

const Home: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");  // State for the user's prompt
  const [imageUrl, setImageUrl] = useState<string>(""); // State to store the generated image URL
  const [generatedImages, setGeneratedImages] = useState<ImageProps[]>([]); // State to store an array of generated images (currently unused)
  const [isLoading, setIsLoading] = useState<boolean>(false); // State to manage loading state (currently unused)

  // Function to handle image generation (currently only logs a message)
  const handleGenerateImage = async () => {
    console.log("Generating Images");
    // Placeholder for actual image generation logic
    // This is where we will make an API call or use a library to generate the image
    // and update the imageUrl state with the result.
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      {/* Container for the input and button */}
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-2">Image Generation App</h1>
        <p className="text-lg text-gray-700 mb-4">
          Generate stunning images based on your prompts!
        </p>

        <div className="w-full max-w-md">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt here..."
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          />
          <button
            onClick={handleGenerateImage}
            className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Generate Image
          </button>
        </div>

        {/* Conditionally render the ImageCard if imageUrl is not empty */}
        {imageUrl && (
          <ImageCard
            action={() => setImageUrl(imageUrl)} // This action doesn't do anything meaningful
            imageUrl={imageUrl}
            prompt={prompt}
          />
        )}
      </div>
    </div>
  );
};

export default Home;