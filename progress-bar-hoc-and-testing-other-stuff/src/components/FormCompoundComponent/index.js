import { ContextSetupForModal } from "../ContextSetupForTestModal";
import { TestContext } from "../TestContextAndStuff";
import { Button } from "./Button";
import { Form } from "./Form";
import { Input } from "./Input";
import { Label } from "./Label";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
      <ContextSetupForModal>
        <Form>
          <Label />
          <Input />
          <Button />
        </Form>
      </ContextSetupForModal>
    </>
  );
};
