import { progress, Progress } from "@material-tailwind/react";


interface progressProps {
    counter: number;
}
export default function ProgressBar(props: progressProps) {
  return (
    <div className="fixed bottom-0 w-full">
      <Progress value={props.counter} color="red" />
     
    </div>  
    );
}