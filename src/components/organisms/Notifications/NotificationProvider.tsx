import { createContext, useContext, ReactNode } from "react";
import { useNotifications } from "../../../hooks/useNotifications";
import { Notification as NotificationComponent } from "./Notification";

interface Notification {
  id: string;
  type: "success" | "error" | "info" | "warning";
  message: string;
  duration?: number;
}

interface NotificationContextType {
  addNotification: (notification: Omit<Notification, "id">) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};

interface NotificationProviderProps {
  children: ReactNode;
}

export const NotificationProvider = ({
  children,
}: NotificationProviderProps) => {
  const {
    notifications,
    addNotification,
    removeNotification,
    clearNotifications,
  } = useNotifications();

  return (
    <NotificationContext.Provider
      value={{
        addNotification,
        removeNotification,
        clearNotifications,
      }}
    >
      {children}
      {notifications.map((notification) => (
        <NotificationComponent
          key={notification.id}
          notification={notification}
          onClose={() => removeNotification(notification.id)}
        />
      ))}
    </NotificationContext.Provider>
  );
};
