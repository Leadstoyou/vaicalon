import { systemSettingRepository } from "../repository/IndexRepository.js";

const createNewSemester = async (req, res) => {
  try {
    const { semester_id, semester_name, start_date, end_date } = req.body;
    const newSemesterData = {
      semester_id,
      semester_name,
      start_date,
      end_date,
    };
    const newSemester = await systemSettingRepository.createNewSemester(newSemesterData);
    res.json(newSemester);
  } catch (error) {
    res.json("not found");
  }
};
const createNewUserRole = async (req, res) => {
  try {
    const { role_name, role_description } = req.body;
    const newUserRoleData = {
      role_name,
      role_description,
    };
    const newSemester = await systemSettingRepository.createNewUserRole(newUserRoleData);
    res.json(newSemester);
  } catch (error) {
    res.json("not found");
  }
};
const getAllSemester = async (req, res) => {
  try {
    const result = await systemSettingRepository.getAllSemester();
    res.json(result);
  } catch (error) {
    res.json("not found");
  }
};
export default { createNewSemester, createNewUserRole,getAllSemester};
