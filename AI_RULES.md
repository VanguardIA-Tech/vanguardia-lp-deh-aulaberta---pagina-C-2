# AI Development Rules for this Project

This document outlines the core technologies and library usage guidelines for developing this application. Adhering to these rules ensures consistency, maintainability, and leverages the strengths of our chosen tech stack.

## Tech Stack Overview

*   **React:** The primary JavaScript library for building user interfaces.
*   **TypeScript:** Used for type safety, improving code quality and developer experience.
*   **Vite:** A fast build tool and development server for modern web projects.
*   **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
*   **shadcn/ui:** A collection of re-usable components built with Radix UI and Tailwind CSS.
*   **React Router DOM:** For declarative routing within the application.
*   **Tanstack Query:** For efficient data fetching, caching, and state management.
*   **Lucide React:** A library for beautiful and consistent SVG icons.
*   **Sonner:** A modern toast component for notifications.
*   **React Hook Form & Zod:** For robust form management and validation.

## Library Usage Guidelines

To maintain consistency and leverage the benefits of our chosen libraries, please follow these guidelines:

*   **UI Components:**
    *   Always prioritize using components from **shadcn/ui**.
    *   If a specific shadcn/ui component doesn't meet the exact design or functionality requirements, create a new custom component in `src/components/` rather than modifying the shadcn/ui source files directly.
    *   For basic HTML elements that don't require complex interactivity, use standard HTML with Tailwind CSS classes.
*   **Styling:**
    *   **Tailwind CSS** is the exclusive styling solution. Avoid writing custom CSS in `.css` files or using inline styles unless absolutely necessary for dynamic values.
    *   Ensure designs are responsive by utilizing Tailwind's responsive utility classes.
*   **Routing:**
    *   Use **React Router DOM** for all client-side navigation. Define routes in `src/App.tsx`.
*   **Data Fetching & Server State:**
    *   Manage server state and data fetching using **Tanstack Query**.
*   **Forms:**
    *   Implement all forms using **React Hook Form** for state management and validation.
    *   Use **Zod** for schema-based form validation.
*   **Icons:**
    *   Use icons from **lucide-react**.
*   **Notifications:**
    *   For toast notifications, use the **Sonner** component.
*   **Modals/Drawers:**
    *   For interactive modal and drawer components, utilize **Vaul**.
*   **Date Pickers:**
    *   For date selection, use **react-day-picker**.
*   **Carousels:**
    *   For carousel functionalities, use **embla-carousel-react**.

## General Principles

*   **Component Structure:** Create a new file for every new component or hook, no matter how small. Aim for components that are 100 lines of code or less.
*   **File Organization:**
    *   Pages go into `src/pages/`.
    *   Reusable components go into `src/components/`.
    *   Hooks go into `src/hooks/`.
    *   Utility functions go into `src/lib/` or `src/utils/`.
*   **Code Quality:** Write clean, readable, and well-structured code. Adhere to TypeScript best practices.
*   **No Over-engineering:** Implement only what is requested. Avoid adding unnecessary complexity or features.