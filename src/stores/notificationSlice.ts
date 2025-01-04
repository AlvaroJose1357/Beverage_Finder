import { StateCreator } from "zustand";
import { Notification } from "../types";
import { FavoritesSliceType } from "./favoritesSlice";

export type NotificationSliceType = {
  notifications: Notification;
  showNotification: (payload: Pick<Notification, "text" | "error">) => void;
  hideNotification: () => void;
};

export const createNotificationSlice: StateCreator<
  NotificationSliceType & FavoritesSliceType,
  [],
  [],
  NotificationSliceType
> = (set, get) => ({
  notifications: {
    text: "",
    error: false,
    show: false,
  },
  showNotification: (payload) => {
    set({
      notifications: {
        text: payload.text,
        error: payload.error,
        show: true,
      },
    });
    setTimeout(() => {
      get().hideNotification();
    }, 5000);
  },
  hideNotification: () => {
    set({
      notifications: {
        text: "",
        error: false,
        show: false,
      },
    });
  },
});
