"use client";

import { useSearchParams } from "next/navigation";
import { useGetCourseQuery } from "@/src/state/api";

export const useCurrentCourse = () => {
  const searchParams = useSearchParams();
  const courseId = searchParams.get("id") ?? "";
  const { data: course, ...rest } = useGetCourseQuery(courseId);

  return { course, courseId, ...rest };
};
