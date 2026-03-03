"use client";

import Select, { type StylesConfig, type SingleValue, type GroupBase } from "react-select";
import ReactCountryFlag from "react-country-flag";
import { getData } from "country-list";

// ── Data ──────────────────────────────────────────────────────────────────────

const RENAME: Record<string, string> = {
  "Korea, Republic of": "South Korea",
  "Korea, Democratic People's Republic of": "North Korea",
  "Taiwan, Province of China": "Taiwan",
  "Tanzania, United Republic of": "Tanzania",
  "Bolivia, Plurinational State of": "Bolivia",
  "Venezuela, Bolivarian Republic of": "Venezuela",
  "Moldova, Republic of": "Moldova",
  "Russian Federation": "Russia",
  "Syrian Arab Republic": "Syria",
  "Viet Nam": "Vietnam",
  "Lao People's Democratic Republic": "Laos",
  "Iran, Islamic Republic of": "Iran",
  "Congo, Democratic Republic of the": "Congo (DRC)",
  "Palestine, State of": "Palestine",
  "Brunei Darussalam": "Brunei",
  "Czechia": "Czech Republic",
  "Türkiye": "Turkey",
};

const cleanName = (name: string): string =>
  RENAME[name] ?? name.replace(/\s*\(the\)\s*$/i, "").replace(/,\s+.+$/, "").trim();

interface CountryOption {
  value: string; // name sent to the form
  label: string; // display name
  code: string;  // ISO 3166-1 alpha-2 for flag
}

const countryOptions: CountryOption[] = [
  ...getData()
    .map(({ code, name }) => ({ value: cleanName(name), label: cleanName(name), code }))
    .sort((a, b) => a.label.localeCompare(b.label)),
  { value: "Other", label: "Other", code: "OTHER" },
];

// ── Flag renderer ─────────────────────────────────────────────────────────────

const FlagIcon = ({ code }: { code: string }) =>
  code === "OTHER" ? (
    <span style={{ fontSize: "1.25em", lineHeight: 1 }}>🌐</span>
  ) : (
    <ReactCountryFlag
      countryCode={code}
      svg
      style={{ width: "1.35em", height: "1.35em", borderRadius: "2px", objectFit: "cover" }}
      aria-label={code}
    />
  );

// ── React-Select custom styles (matches site: #0f4c75, rounded-xl) ────────────

const selectStyles: StylesConfig<CountryOption, false, GroupBase<CountryOption>> = {
  control: (base, state) => ({
    ...base,
    borderRadius: "0.75rem",
    borderColor: state.isFocused ? "#0f4c75" : "#e5e7eb",
    boxShadow: state.isFocused ? "0 0 0 2px rgba(15,76,117,0.18)" : "none",
    padding: "0 4px",
    minHeight: "48px",
    height: "48px",
    backgroundColor: "#fff",
    cursor: "pointer",
    "&:hover": { borderColor: state.isFocused ? "#0f4c75" : "#d1d5db" },
    transition: "border-color 0.15s, box-shadow 0.15s",
  }),
  valueContainer: (base) => ({
    ...base,
    padding: "0 8px",
    height: "48px",
    display: "flex",
    alignItems: "center",
    flexWrap: "nowrap",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#9ca3af",
    fontSize: "14px",
    margin: 0,
    position: "static",
    transform: "none",
    display: "flex",
    alignItems: "center",
  }),
  input: (base) => ({
    ...base,
    color: "#111827",
    fontSize: "14px",
    margin: 0,
    padding: 0,
    position: "absolute",
  }),
  singleValue: (base) => ({
    ...base,
    margin: 0,
    color: "#111827",
    position: "static",
    transform: "none",
    maxWidth: "100%",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
  }),
  indicatorSeparator: () => ({ display: "none" }),
  dropdownIndicator: (base, state) => ({
    ...base,
    color: "#9ca3af",
    padding: "0 8px 0 0",
    transition: "transform 0.2s",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
    "&:hover": { color: "#0f4c75" },
  }),
  menu: (base) => ({
    ...base,
    borderRadius: "0.75rem",
    boxShadow: "0 10px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
    border: "1px solid #e5e7eb",
    overflow: "hidden",
    zIndex: 50,
    marginTop: "6px",
  }),
  menuList: (base) => ({ ...base, padding: "4px", maxHeight: "220px" }),
  option: (base, state) => ({
    ...base,
    borderRadius: "0.5rem",
    padding: "8px 12px",
    backgroundColor: state.isSelected
      ? "#0f4c75"
      : state.isFocused
      ? "rgba(15,76,117,0.07)"
      : "transparent",
    color: state.isSelected ? "#fff" : "#374151",
    cursor: "pointer",
    transition: "background-color 0.1s",
    "&:active": { backgroundColor: "rgba(15,76,117,0.15)" },
  }),
  noOptionsMessage: (base) => ({ ...base, fontSize: "13px", color: "#9ca3af", padding: "12px" }),
};

// ── Component ─────────────────────────────────────────────────────────────────

interface CountrySelectProps {
  name: string;
  value: string;
  // Accepts both React's ChangeEvent (from regular inputs) and our synthetic event
  onChange: (e: { target: { name: string; value: string } }) => void;
  required?: boolean;
  placeholder?: string;
}

export default function CountrySelect({
  name,
  value,
  onChange,
  required,
  placeholder = "Select your country",
}: CountrySelectProps) {
  const selected = countryOptions.find((o) => o.value === value) ?? null;

  const handleChange = (option: SingleValue<CountryOption>) => {
    onChange({ target: { name, value: option?.value ?? "" } });
  };

  return (
    <div className="relative">
      {/* Hidden input for native HTML form validation */}
      <input
        type="text"
        name={`${name}_hidden`}
        value={value}
        required={required}
        readOnly
        tabIndex={-1}
        aria-hidden="true"
        style={{ position: "absolute", opacity: 0, height: 0, width: 0, pointerEvents: "none" }}
      />

      <Select<CountryOption>
        instanceId={`country-select-${name}`}
        options={countryOptions}
        value={selected}
        onChange={handleChange}
        placeholder={
          <span style={{ display: "flex", alignItems: "center", gap: "10px", lineHeight: 1 }}>
            <span style={{ fontSize: "1.25em", lineHeight: 1 }}>🌐</span>
            <span style={{ fontSize: "14px", color: "#9ca3af" }}>{placeholder}</span>
          </span>
        }
        formatOptionLabel={(option: CountryOption) => (
          <div style={{ display: "flex", alignItems: "center", gap: "10px", lineHeight: 1 }}>
            <FlagIcon code={option.code} />
            <span style={{ fontSize: "14px", lineHeight: "1.4" }}>{option.label}</span>
          </div>
        )}
        styles={selectStyles}
        filterOption={(opt, input) =>
          opt.data.label.toLowerCase().includes(input.toLowerCase()) ||
          opt.data.code.toLowerCase().includes(input.toLowerCase())
        }
        isSearchable
        isClearable={false}
        menuPlacement="auto"
        noOptionsMessage={() => "No countries found"}
        aria-label="Select country"
      />
    </div>
  );
}