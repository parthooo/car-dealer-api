const userRoles = {
  SUPER_ADMIN: 1,
  SOCIAL_MEDIA_MANAGER: 2,
  STRATEGIC_APPROVER: 3,
  LEGAL_APPROVER: 4,
  MORTGAGE_OFFICER: 5,
  CONTENT_CREATOR: 6,
};

const postStatus = {
  Draft: "Draft",
  SMM_to_review: "SMM_to_review",
  Archived: "Archived",
  SMM_rejected: "SMM_rejected",
  SA_to_review: "SA_to_review",
  SA_rejected: "SA_rejected",
  SA_reviewed: "SA_reviewed",
  LA_to_review: "LA_to_review",
  LA_rejected: "LA_rejected",
  review_completed: "review_completed",
  added_to_catalog: "added_to_catalog",
};

const sanitizeInputs = {
  register: ["fname", "lname", "email", "password"],
  login: ["email", "password"],
  forgotPass: ["email"],
  updatePass: ["password", "confirm_password"],
};

const postStatusMessages = {
  Draft: "Draft",
  SMM_to_review: "Social Media Manager to review",
  Archived: "Archived",
  SMM_rejected: "Social Media Manager rejected",
  SA_to_review: "Strategic Approver to review",
  SA_rejected: "Strategic Approver rejected",
  SA_reviewed: "Strategic Approver reviewed",
  LA_to_review: "Legal Approvers to review",
  LA_rejected: "Legal Approvers rejected",
  review_completed: "All review completed",
  added_to_catalog: "Added to catalogue",
};

const userRolesID = {
  1:"Super Admin",
  2:"Social Media Manager",
  3:"Strategic Approver",
  4:"Legal Approvers",
  5:"Mortgage Loan Officer",
  6:"Content Creator",
}

module.exports = { userRoles, postStatus, sanitizeInputs, postStatusMessages, userRolesID };
