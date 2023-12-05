"use client";
import StepperForm from "@/components/StepperForm/StepperForm";

import GurdianInfo from "@/components/StudentForm/GurdianInfo";
import LocalGuradian from "@/components/StudentForm/LocalGuradian";
import StudentBasicInfo from "@/components/StudentForm/StudentBasicInfo";
import StudentInfo from "@/components/StudentForm/StudentInfo";

const CreateStudentPage = () => {
  const steps = [
    {
      title: "Student information",
      content: <StudentInfo />,
    },
    {
      title: "Basic information",
      content: <StudentBasicInfo />,
    },
    {
      title: "Gurdian information",
      content: <GurdianInfo />,
    },
    {
      title: "Local gurdian information",
      content: <LocalGuradian />,
    },
  ];

  const handleStudentSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <StepperForm
      submitHandler={(value) => handleStudentSubmit(value)}
      steps={steps}></StepperForm>
  );
};

export default CreateStudentPage;
