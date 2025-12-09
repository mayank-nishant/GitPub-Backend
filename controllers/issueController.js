const createIssue = (req, res) => {
  res.send("Issue created");
};

const updateIssueById = (req, res) => {
  res.send(`Issue updated with ID: ${req.params.id}`);
};

const deleteIssueById = (req, res) => {
  res.send(`Issue deleted with ID: ${req.params.id}`);
};

const getAllIssues = (req, res) => {
  res.send("All issues fetched");
};

const getIssueById = (req, res) => {
  res.send(`Issue fetched with ID: ${req.params.id}`);
};

export { createIssue, updateIssueById, deleteIssueById, getAllIssues, getIssueById };
