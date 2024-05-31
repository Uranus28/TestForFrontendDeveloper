import { FC } from "react";
import { Button } from "../../entities/Button/Button";
import { Loader } from "../../entities/Loader/Loader";
import { IconType } from "../../shared/types/iconTypes";

export const PersonPage: FC = () => {
  return (
    <div>
      <div>
        <Loader />
      </div>
      <Button text="Refresh" icon={IconType.Refresh} />
      <Button text="Save" icon={IconType.Date} />
      <Button text="Search" icon={IconType.Search} />
    </div>
  );
};
