import { Router } from "express"
import { jwtAuthMiddleware } from "../middleware/jwt-auth";
import { adminAuthMiddleware } from "../middleware/adminAuthMiddleware";
import { destroyCategory, editCategory, listCategory, categories, saveCategory, updateCategory, listingCategory } from "../controllers/CategoryController";
import { destroyPosition, editPosition, listPosition, listingPosition, savePosition, updatePosition } from "../controllers/PositionController";
import { destroyApplicant, editApplicant, listApplicant, saveApplicant, updateApplicant } from "../controllers/ApplicantController";
import { destroyContact, editContact, listContact, saveContact, updateContact} from "../controllers/ContactController";
import { editHome, listHome, listingHome, seoHome, updateHome } from "../controllers/HomeController";
import { destroySlider, editSlider, listSlider, saveSlider, updateSlider } from "../controllers/SliderController";
import { destroyStory, editStory, listStory, listingStory, saveStory, seoStory, updateStory } from "../controllers/StoryController";
import { editContactPage, seoContactPage, updateContactPage } from "../controllers/ContactPageController";
import { editCareerPage, listingCareerPage, seoCareerPage, updateCareerPage } from "../controllers/CareerPageController";
import { destroyTestimonial, editTestimonial, listTestimonial, saveTestimonial, updateTestimonial } from "../controllers/TestimonialController";
import { editAboutUs, listAboutUs, listingAboutUs, seoAboutUs, updateAboutUs } from "../controllers/AboutUsController";
import { editProcess, listProcess, listingProcess, seoProcess, updateProcess } from "../controllers/ProcessController";
import { editSolution, listSolution, updateSolution, solutionDetails, seoSolution } from "../controllers/SolutionController";
import { destroyService, editService, listService, saveService, updateService } from "../controllers/ServiceController";
import { destroyProjectHighlight, editProjectHighlight, listProjectHighlight, saveProjectHighlight, updateProjectHighlight } from "../controllers/ProjectHighlightController";
import { destroyProcessSlider, editProcessSlider, listProcessSlider, listingProcessSlider, saveProcessSlider, updateProcessSlider } from "../controllers/ProcessSliderController";
import { destroyClient, editClient, listClient, saveClient, updateClient } from "../controllers/ClientController";
import { adminLogin, findUserByEmail } from "../controllers/AuthController";
import { destroyUser, editUser, getUser, getUserById, listingProfileAddress, listingUser, saveUser, updateUser, editProfileAdmin, editProfile } from "../controllers/UserController";

const router = Router();
router.post("/admin/login", adminLogin);
router.get("/admin/user/:email", findUserByEmail);
router.put("/admin/profile/update", adminAuthMiddleware, editProfile);
router.put("/admin/profile/edit", adminAuthMiddleware, editProfileAdmin);

//user Route
router.get("/admin/user",adminAuthMiddleware, getUser);
router.get("/admin/user/edit/:id",adminAuthMiddleware, getUserById);
router.post("/admin/user/store",adminAuthMiddleware, saveUser);
router.put("/admin/user/update",adminAuthMiddleware, updateUser);
router.delete("/admin/user/delete/:id",adminAuthMiddleware, destroyUser);
//Category
router.get("/admin/category", listCategory);
router.post("/admin/category/store", saveCategory);
router.get("/admin/category/edit/:id", editCategory);
router.put("/admin/category/update", updateCategory);
router.delete("/admin/category/delete/:id", destroyCategory);

//Position
router.get("/admin/position", listPosition);//
router.post("/admin/position/store", savePosition);
router.get("/admin/position/edit/:id", editPosition);
router.put("/admin/position/update", updatePosition);
router.delete("/admin/position/delete/:id", destroyPosition);

//Applicant
router.get("/admin/applicant", listApplicant);
router.post("/admin/applicant/store", saveApplicant);
router.get("/admin/applicant/edit/:id", editApplicant);
router.put("/admin/applicant/update", updateApplicant);
router.delete("/admin/applicant/delete/:id", destroyApplicant);

//contact
router.get("/admin/contact", listContact);
router.get("/admin/contact/edit/:id", editContact);
router.put("/admin/contact/update", updateContact);
router.delete("/admin/contact/delete/:id", destroyContact);

//Home
router.get("/admin/home", listHome);
router.get("/admin/home/edit/:id", editHome);
router.put("/admin/home/update", updateHome);


//slider
router.get("/admin/slider", listSlider);
router.post("/admin/slider/store", saveSlider);
router.get("/admin/setting/edit/:id", editSlider);
router.put("/admin/setting/update", updateSlider);
router.delete("/admin/slider/delete/:id", destroySlider);

//story
router.get("/admin/story", listStory);
router.post("/admin/story/store", saveStory);
router.get("/admin/story/edit/:id", editStory);
router.put("/admin/story/update", updateStory);
router.delete("/admin/story/delete/:id", destroyStory);

router.get("/admin/career-page/edit/:id", editCareerPage);
router.put("/admin/career-page/update", updateCareerPage);

router.get("/admin/contact-page/edit/:id", editContactPage);
router.put("/admin/contact-page/update", updateContactPage);

//testimonial
router.get("/admin/testimonial", listTestimonial);
router.post("/admin/testimonial/store", saveTestimonial);
router.get("/admin/testimonial/edit/:id", editTestimonial);
router.put("/admin/testimonial/update", updateTestimonial);
router.delete("/admin/testimonial/delete/:id", destroyTestimonial);

//About Us
router.get("/admin/about-us", listAboutUs);
router.get("/admin/about-us/edit/:id", editAboutUs);
router.put("/admin/about-us/update", updateAboutUs);

//Process
router.get("/admin/process", listProcess);
router.get("/admin/process/edit/:id", editProcess);
router.put("/admin/process/update", updateProcess);

//Solution
router.get("/admin/solution", listSolution);
router.get("/admin/solution/edit/:id", editSolution);
router.put("/admin/solution/update", updateSolution);

//Our Service
router.get("/admin/service", listService);
router.post("/admin/service/store", saveService);
router.get("/admin/service/edit/:id", editService);
router.put("/admin/service/update", updateService);
router.delete("/admin/service/delete/:id", destroyService);

//project highlight
router.get("/admin/project-highlight", listProjectHighlight);
router.post("/admin/project-highlight/store", saveProjectHighlight);
router.get("/admin/project-highlight/edit/:id", editProjectHighlight);
router.put("/admin/project-highlight/update", updateProjectHighlight);
router.delete("/admin/project-highlight/delete/:id", destroyProjectHighlight);

//process slider
router.get("/admin/process-slider", listProcessSlider);
router.post("/admin/process-slider/store", saveProcessSlider);
router.get("/admin/process-slider/edit/:id", editProcessSlider);
router.put("/admin/process-slider/update", updateProcessSlider);
router.delete("/admin/process-slider/delete/:id", destroyProcessSlider);

//client
router.get("/admin/client", listClient);
router.post("/admin/client/store", saveClient);
router.get("/admin/client/edit/:id", editClient);
router.put("/admin/client/update", updateClient);
router.delete("/admin/client/delete/:id", destroyClient);

// FRONTEND (WEB)

//contact
router.get("/v1/categories", categories);
router.get("/v1/category/edit/:id", listingCategory );

//contact
router.post("/v1/contact/store", saveContact);

//applicant
router.post("/v1/applicant/store", saveApplicant);

//position
router.get("/v1/position", listingPosition);

//home
router.get("/v1/home", listingHome);

//about us
router.get("/v1/about-us", listingAboutUs);

//process
router.get("/v1/process", listingProcess);

router.get("/v1/solution-details", solutionDetails);
router.get("/v1/solution", solutionDetails);

//story
router.get("/v1/story", listingStory);

//setting
router.get("/v1/setting", listSlider);

//process slider
router.get("/v1/process-slider", listingProcessSlider);

//career page
router.get("/v1/career", listingCareerPage);


//Seo
router.get("/v1/about-seo", seoAboutUs);
router.get("/v1/home-seo", seoHome);
router.get("/v1/career-seo", seoCareerPage);
router.get("/v1/process-seo", seoProcess);
router.get("/v1/story-seo", seoStory);
router.get("/v1/solution-seo", seoSolution);
router.get("/v1/contact-seo", seoContactPage);


export default router;
