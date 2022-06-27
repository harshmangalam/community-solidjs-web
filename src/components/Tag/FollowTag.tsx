import { followUnfollowTag } from "@/services";
import { Button, notificationService } from "@hope-ui/solid";
import { AxiosError } from "axios";
import { handleServerError } from "@/utils/handleServerError";
import { useAuthDispatch } from "@/context/authProvider";
import { Show } from "solid-js";
export default function FollowTag(props) {
  const authDispatch = useAuthDispatch();
  const handleFollowUnfollowTag = async (tagId: string) => {
    try {
      const res = await followUnfollowTag(tagId);
      props.refetchTagDetail();
      authDispatch.handleFetchCurrentUser();
      notificationService.show({
        title: res.data.message,
        duration: 3000,
        status: "success",
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        handleServerError(error);
      }
    }
  };
  return (
    <Button
      onClick={[handleFollowUnfollowTag, props.tagId]}
      colorScheme={props.isFollowing ? "danger" : "info"}
      rounded={"$full"}
    >
      <Show when={props.isFollowing} fallback={"Follow"}>
        Unfollow
      </Show>
    </Button>
  );
}
