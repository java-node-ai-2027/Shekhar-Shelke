import mongoose from "mongoose";
export const Enum={
  CREATE:'create',
  INPROGRESS:'inprogress',
  DONE:'done',
  REJECT:'reject' 
}
const taskSchema = new mongoose.Schema(
  {
    Title: {
      type: String,
      require: true,
    },
    Description: {
      type: String,
      default: "",
    },
  
    stage:{
      type:String,
      enum:Object.values(Enum),
      default:'create',
      require:true

    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }
  },
  {
    timestamps: true,
  },
);
const task = mongoose.model("TaskDetails", taskSchema);

export default task;
