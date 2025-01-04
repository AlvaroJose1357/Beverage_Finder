import { StateCreator } from "zustand";
import { Notification } from "../types";

export type NotificationSliceType = {
  notifications: Notification;
};

export const createNotificationSlice: StateCreator<NotificationSliceType> = (
  set,
  get,
) => ({
  notifications: {
    text: "",
    error: false,
    show: false,
  },
});
