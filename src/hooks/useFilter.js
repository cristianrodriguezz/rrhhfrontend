import { useStoreFilterFront } from "./useStore";

export function useFilters() {
  const { filters, setFilters } = useStoreFilterFront();

  const filterCandidate = (candidates) => {
    return candidates?.filter((candidate) => {
      return (
        (filters.location === 'all' || candidate.location === filters.location) &&
        (filters.current_position === 'all' || candidate.current_position === filters.current_position) &&
        (filters.status === 'all' || candidate.status === filters.status) &&
        (filters.cuil === 'all' || candidate.cuil === filters.cuil) &&
        (filters.has_work_experience === 'all' || candidate.has_work_experience === filters.has_work_experience) &&
        (filters.has_own_transport === 'all' || candidate.has_own_transport === filters.has_own_transport) &&
        (filters.availability_schedule === 'all' || candidate.availability_schedule === filters.availability_schedule) &&
        (filters.age === 'all' || candidate.age === filters.age)
      );
    });
  };

  return { filterCandidate, setFilters, filters };
}

