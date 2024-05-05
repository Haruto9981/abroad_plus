export declare function showInvalidLicenseKeyError(): void;
export declare function showLicenseKeyPlanMismatchError(): void;
export declare function showMissingLicenseKeyError({ plan, packageName, }: {
    plan: string;
    packageName: string;
}): void;
export declare function showExpiredPackageVersionError({ packageName }: {
    packageName: string;
}): void;
export declare function showExpiredLicenseKeyError(): void;
