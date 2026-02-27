"use client";

import styles from "./Page.module.scss";
import { useState } from "react";
import { iconsData, IconItem } from "@/data/iconsdata";
import Popup from "@/components/molecules/Popup/Popup";

export default function Page() {
  const [search, setSearch] = useState("");
  const [selectedIcon, setSelectedIcon] = useState<IconItem | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredIcons = iconsData.filter((icon) => {
    const term = search.toLowerCase();
    const nameMatch = icon.name.toLowerCase().includes(term);
    const tagMatch = icon.tags.some((tag) => tag.toLowerCase().includes(term));
    return nameMatch || tagMatch;
  });

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <input
          type="text"
          placeholder="Search icons by name or tag..."
          value={search}
          onChange={handleSearch}
        />
      </header>

      <div className={styles.iconsGrid}>
        {filteredIcons.map((icon) => (
          <div
            key={icon.id}
            className={styles.iconItem}
            onClick={() => setSelectedIcon(icon)}
          >
            <div dangerouslySetInnerHTML={{ __html: icon.svg }} />
            <p>{icon.name}</p>
          </div>
        ))}
      </div>

      <Popup
        isOpen={!!selectedIcon}
        onClose={() => setSelectedIcon(null)}
        iconName={selectedIcon?.name || ""}
        svgCode={selectedIcon?.svg || ""}
      />
    </div>
  );
}
