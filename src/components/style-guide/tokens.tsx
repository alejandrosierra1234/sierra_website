import { Chapter, Topic } from "./doc";
import { Table, THead, TBody, Tr, Th, Td } from "@/components/ui/table";
import {
  surfaceColors,
  neutralColors,
  tealColors,
  semanticColors,
  radiusScale,
  shadowScale,
  zIndexScale,
  motionTokens,
  spacingScale,
} from "@/lib/tokens";

function ColorRows({ tokens }: { tokens: { name: string; value: string; usage: string }[] }) {
  return (
    <>
      {tokens.map((t) => (
        <Tr key={t.name}>
          <Td className="font-mono text-xs">--color-{t.name}</Td>
          <Td>
            <span className="flex items-center gap-2">
              <span
                aria-hidden
                className="inline-block size-4 rounded-xs border border-neutral-200"
                style={{ backgroundColor: t.value }}
              />
              <span className="font-mono text-xs uppercase">{t.value}</span>
            </span>
          </Td>
          <Td className="text-neutral-600">{t.usage}</Td>
        </Tr>
      ))}
    </>
  );
}

export function TokensChapter() {
  return (
    <Chapter
      id="tokens"
      number="07 · Design tokens"
      title="Design tokens"
      lede="Every token in the system, as implemented in globals.css (@theme) and consumed as Tailwind utilities. Components never use raw values — if a value isn’t here, it doesn’t exist."
    >
      <Topic id="token-colors" title="Color tokens">
        <Table caption="All color tokens">
          <THead>
            <Tr>
              <Th>Token</Th>
              <Th>Value</Th>
              <Th>Usage</Th>
            </Tr>
          </THead>
          <TBody>
            <ColorRows tokens={surfaceColors} />
            <ColorRows tokens={neutralColors} />
            <ColorRows tokens={tealColors} />
            <ColorRows tokens={semanticColors} />
          </TBody>
        </Table>
      </Topic>

      <Topic id="token-spacing" title="Spacing tokens">
        <Table caption="Spacing tokens">
          <THead>
            <Tr>
              <Th>Utility step</Th>
              <Th numeric>Value</Th>
              <Th>Usage</Th>
            </Tr>
          </THead>
          <TBody>
            {spacingScale.map((s) => (
              <Tr key={s.token}>
                <Td className="font-mono text-xs">{s.token}</Td>
                <Td numeric>{s.px}</Td>
                <Td className="text-neutral-600">{s.use}</Td>
              </Tr>
            ))}
          </TBody>
        </Table>
      </Topic>

      <Topic id="token-typography" title="Typography tokens">
        <Table caption="Typography tokens">
          <THead>
            <Tr>
              <Th>Token</Th>
              <Th>Value</Th>
              <Th>Usage</Th>
            </Tr>
          </THead>
          <TBody>
            <Tr>
              <Td className="font-mono text-xs">--font-display</Td>
              <Td className="font-mono text-xs">Replica, Aeonik</Td>
              <Td className="text-neutral-600">Display and headings (h1–h6)</Td>
            </Tr>
            <Tr>
              <Td className="font-mono text-xs">--font-sans</Td>
              <Td className="font-mono text-xs">Aeonik, system-ui</Td>
              <Td className="text-neutral-600">Body and UI text</Td>
            </Tr>
            <Tr>
              <Td className="font-mono text-xs">--font-mono</Td>
              <Td className="font-mono text-xs">Geist Mono, ui-monospace</Td>
              <Td className="text-neutral-600">Specs, figures, eyebrows, labels</Td>
            </Tr>
            <Tr>
              <Td className="font-mono text-xs">--text-display</Td>
              <Td className="font-mono text-xs">clamp(2.75rem, 2rem + 3vw, 4.25rem)</Td>
              <Td className="text-neutral-600">Hero headlines; lh 1.02, ls −2%</Td>
            </Tr>
          </TBody>
        </Table>
      </Topic>

      <Topic id="token-radius" title="Radius tokens">
        <Table caption="Radius tokens">
          <THead>
            <Tr>
              <Th>Token</Th>
              <Th numeric>Value</Th>
              <Th>Usage</Th>
            </Tr>
          </THead>
          <TBody>
            {radiusScale.map((r) => (
              <Tr key={r.token}>
                <Td className="font-mono text-xs">--{r.token}</Td>
                <Td numeric>{r.value}</Td>
                <Td className="text-neutral-600">{r.use}</Td>
              </Tr>
            ))}
          </TBody>
        </Table>
      </Topic>

      <Topic id="token-shadows" title="Shadow tokens">
        <Table caption="Shadow tokens">
          <THead>
            <Tr>
              <Th>Token</Th>
              <Th>Value</Th>
              <Th>Usage</Th>
            </Tr>
          </THead>
          <TBody>
            {shadowScale.map((s) => (
              <Tr key={s.token}>
                <Td className="font-mono text-xs">--{s.token}</Td>
                <Td className="font-mono text-xs">{s.value}</Td>
                <Td className="text-neutral-600">{s.use}</Td>
              </Tr>
            ))}
          </TBody>
        </Table>
      </Topic>

      <Topic id="token-z" title="Z-index tokens">
        <Table caption="Z-index tokens">
          <THead>
            <Tr>
              <Th>Token</Th>
              <Th numeric>Value</Th>
              <Th>Usage</Th>
            </Tr>
          </THead>
          <TBody>
            {zIndexScale.map((z) => (
              <Tr key={z.token}>
                <Td className="font-mono text-xs">{z.token}</Td>
                <Td numeric>{z.value}</Td>
                <Td className="text-neutral-600">{z.use}</Td>
              </Tr>
            ))}
          </TBody>
        </Table>
      </Topic>

      <Topic id="token-motion" title="Motion tokens">
        <Table caption="Motion tokens">
          <THead>
            <Tr>
              <Th>Token</Th>
              <Th>Value</Th>
              <Th>Usage</Th>
            </Tr>
          </THead>
          <TBody>
            {motionTokens.map((m) => (
              <Tr key={m.token}>
                <Td className="font-mono text-xs">{m.token}</Td>
                <Td className="font-mono text-xs">{m.value}</Td>
                <Td className="text-neutral-600">{m.use}</Td>
              </Tr>
            ))}
          </TBody>
        </Table>
      </Topic>

      <p className="max-w-2xl text-sm leading-relaxed text-neutral-600">
        Implementation: tokens are declared once in{" "}
        <code className="rounded-xs bg-neutral-100 px-1 py-0.5 font-mono text-xs">src/app/globals.css</code>{" "}
        under <code className="rounded-xs bg-neutral-100 px-1 py-0.5 font-mono text-xs">@theme</code> and
        mirrored in{" "}
        <code className="rounded-xs bg-neutral-100 px-1 py-0.5 font-mono text-xs">src/lib/tokens.ts</code>{" "}
        for this documentation. Both files change in the same commit, and the Style Guide is updated
        before any component that consumes the change.
      </p>
    </Chapter>
  );
}
