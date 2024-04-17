<template>
    <Toolbar style=" padding: 1rem 1rem 1rem 1.5rem">
    <template #start>
        <div class="flex align-items-center gap-2">
            <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="..." fill="var(--text-color)" />
                <path d="..." fill="var(--surface-card)" />
            </svg>
            <Button label="Files" text plain />
            <Button label="Edit" text plain />
            <Button label="View" text plain />
        </div>
    </template>

    <template #end>
        <div class="flex align-items-center gap-2">
            <Button label="Share" severity="contrast" size="small" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" style="width: 32px; height: 32px" />
        </div>
    </template>
</Toolbar>
</template>