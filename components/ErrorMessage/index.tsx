import { ErrorMessage } from "@/types/types";

export const FormErrorMessage = ({ error }: ErrorMessage ) => {
    if (!error) return null;
  
    return (
      <span className="text-danger fs-14">
        {error.message ? error.message : ''}
      </span>
    );
  };
  