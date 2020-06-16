import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../components";
import { ContributionSection, RepoSection, UserSection } from "./components";
import { LanguagesActions } from "./store/languages/actions";
import { ReposActions } from "./store/repos/actions";
import { Repo } from "./store/repos/types";
import { ApplicationState } from "./store/types";
import { UserActions } from "./store/user/actions";

const selector = (state: ApplicationState) => ({ ...state });

function Profile({ match, history }) {
  const [selectedRepo, setSelectedRepo] = useState<Repo>();

  const { user, repos, languages, error } = useSelector(selector);

  const dispatch = useDispatch();

  const name = match.params.username;

  useEffect(() => {
    try {
      if (error.error) throw error.message;
      dispatch(UserActions.getAsyncData(name));
      dispatch(ReposActions.getAsyncData(name));
    } catch (e) {
      alert(
        `${error.error.message}\n${error.message}\nPlease reload the page, if error persists the rate limit is exceeded, try again later.`
      );
    }
  }, [dispatch, error.error, error.message, name]);

  useEffect(() => {
    try {
      if (error.error) throw error.message;
      if (selectedRepo) {
        dispatch(LanguagesActions.getAsyncData(name, selectedRepo.name));
      }
    } catch (e) {
      alert(
        `${error.error.message}\n${error.message}\nPlease reload the page, if error persists the rate limit is exceeded, try again later.`
      );
    }
  }, [dispatch, error.error, error.message, name, selectedRepo]);

  return (
    <>
      <div
        style={{
          background: "#fff",
          width: "100%",
          padding: "20px 0 0",
          marginBottom: "50px",
        }}
      >
        <Input setSelectedRepo={setSelectedRepo} row />
      </div>

      <UserSection user={user} />

      <RepoSection
        repos={repos}
        languages={languages}
        selectedRepo={selectedRepo}
        setSelectedRepo={setSelectedRepo}
      />

      <ContributionSection username={name} />
    </>
  );
}

export default Profile;
