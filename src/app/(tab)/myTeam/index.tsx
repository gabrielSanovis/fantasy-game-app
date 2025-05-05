import { Field } from "@/components/organisms/Field";
import ModalList from "@/components/organisms/ModalList";
import { ScreenContainerTemplate } from "@/components/templates/ScreenContainerTemplate";
import { useTeamViewModel } from "@/viewmodels/useTeamViewModel";

export default function MyTeamScreen() {
  const {
    visible,
    positions,
    closeModal,
    fieldInformations,
    handleFieldInformations
  } = useTeamViewModel();

  return (
    <ScreenContainerTemplate title="MEU TIME">
      <ModalList
        visible={visible}
        onClose={closeModal}
        fieldInformation={fieldInformations}
      />
      <Field handleFieldInformations={handleFieldInformations} positions={positions} />
    </ScreenContainerTemplate>
  );
}
