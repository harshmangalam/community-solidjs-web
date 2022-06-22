import { notificationService } from "@hope-ui/solid";
import { AxiosError } from "axios";

export const handleServerError = (error: any) => {
  if (Array.isArray(error.response.data?.message)) {
    error.response.data.message.forEach((msg: string) => {
      notificationService.show({
        title: msg,
        duration: 3000,
        closable: true,
        status: "danger",
      });
    });
    return;
  }

  if (error instanceof AxiosError) {
    notificationService.show({
      title: error.response?.data?.message || error.message,
      duration: 3000,
      closable: true,
      status: "danger",
    });
  }
  return;
};
