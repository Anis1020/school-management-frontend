import { useGetAllSemestersQuery } from "../../../redux/features/semesterApi/semesterApi";

const AcademicSemester = () => {
  const { data } = useGetAllSemestersQuery(undefined);
  console.log(data);
  return (
    <div>
      <h2>Academic semesters</h2>
    </div>
  );
};

export default AcademicSemester;
