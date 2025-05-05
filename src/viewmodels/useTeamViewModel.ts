import { Position } from "@/models/Position";
import { useTeam } from "@/store/team";
import { useState } from "react";

export function useTeamViewModel() {
  const { positions } = useTeam();

  const [isOpen, setIsOpen] = useState(false);
  const [fieldInformations, setFieldInformations] = useState<{
    fieldPosition: Position | null;
    index: number | null;
  }>({ fieldPosition: null, index: null });

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const handleFieldInformations = (fieldPosition: Position, index: number) => {
    setFieldInformations({
      index,
      fieldPosition,
    });
    openModal();
  };

  return {
    positions,
    closeModal,
    visible: isOpen,
    fieldInformations,
    handleFieldInformations,
  };
}
