import { SELECT, INPUT_NUMBER } from "../../constants";
import { isEveryValueMissing } from "service/utils";

export const waitForFileChooser = {

  template: ({ params }) => {
    const { timeout } = params,
          options = {
            timeout
          },
          optArg = isEveryValueMissing( options ) ? `` : ` ${ JSON.stringify( options ) } `;
    return `
      // Waiting for file chooser
      await bs.page.waitForFileChooser(${optArg});
    `;
  },

  toLabel: ({ params }) => {
    return `(${ params.timeout }ms)`;
  },
  commonly: "wait for file chooser",


  params: [
    {
      collapsed: true,
      tooltip: "",
      span: { label: 4, input: 18 },
      fields: [
        {
          name: "params.timeout",
          control: INPUT_NUMBER,
          label: "Timeout (ms)",
          initialValue: 30000,
          tooltip: `Maximum navigation time in milliseconds, defaults to 30 seconds, pass 0 to disable timeout.`,
          placeholder: "",
          rules: []
        }

      ]
    }
  ]
};