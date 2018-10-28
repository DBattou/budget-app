import React from "react";

const EditPage = props => {
  console.log(props);

  return (
    <div>
      This is from edit page
      <button>Add expense</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addExpense: dispatch(addExpense())
});

export default EditPage;
