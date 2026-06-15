import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import LinkText from "../LinkText/LinkText";
import CardLinkText from "../CardLinkText/CardLinkText";
import "./ExperienceSection.css";

const ExperienceSection = () => {
  return (
    <>
      <div className="experience-section mt-4" id="experience">
        <ExperienceCard
          date="August 2024 - Present"
          title={
            <div>
              <CardLinkText link="https://aws.amazon.com/">
                Amazon Web Services
              </CardLinkText>
            </div>
          }
          position="SDE"
          builtWith={[
            "Distributed Databases",
            "Distributed Systems",
            "Query Execution/Query Optimization",
            "Spark",
            "Trino",
            "Presto",
            "AWS SDK/CDK",
            "Java",
            "TypeScript",
            "Claude Code",
          ]}
          content={[
            <div>
              SDE on data plane for{" "}
              <CardLinkText link="https://aws.amazon.com/athena/">
                Amazon Athena
              </CardLinkText>{" "}
              and{" "}
              <CardLinkText link="https://aws.amazon.com/emr/">
                Amazon EMR
              </CardLinkText>
            </div>,
            <div>
              Improve the engine execution layer of the Athena and EMR
              lifecycle, focusing on optimizing performance and memory
              utilization.
            </div>,
            <div>
              Build features with sub-millisecond latency on top of Athena’s
              distributed, multi-tenant architecture that impact billions of
              queries weekly.
            </div>,
            <div>
              Improve operations, developer experience, and engine release
              safety.
            </div>,
          ]}
        ></ExperienceCard>
        <ExperienceCard
          date="May 2023 - August 2023"
          title={
            <div>
              <CardLinkText link="https://aws.amazon.com/">
                Amazon Web Services
              </CardLinkText>
            </div>
          }
          position="SDE Intern"
          builtWith={[
            "Java",
            "Bash",
            "AWS EMR",
            "AWS DynamoDB",
            "AWS SQS",
            "AWS S3",
            "AWS CodeDeploy",
            "AWS CloudWatch",
            "AWS IAM",
          ]}
          content={[
            <div>
              Interned within{" "}
              <CardLinkText link="https://aws.amazon.com/emr/">
                Amazon EMR
              </CardLinkText>
              , Amazon's big data analytics platform.
            </div>,
            <div>
              Developed proxy instances, which are specialized EC2 instances
              that provide connectivity between the EMR service and a customer's
              private subnet cluster.
            </div>,
            <div>
              Created an end-to-end feature that allowed for unique proxy
              customization, creation, and attachment.
            </div>,
            <div>
              Condensed the proxy testing procedure from 2-3 hours to 10 minutes
              and 1 CLI command.
            </div>,
          ]}
        ></ExperienceCard>
        <ExperienceCard
          date="August 2022 - May 2023"
          title={
            <div>
              <CardLinkText link="https://www.dreamteameng.org/software">
                UF Dream Team Engineering
              </CardLinkText>
            </div>
          }
          position="Software Team Captain"
          builtWith={["Python", "OpenCV", "Unity"]}
          content={[
            <div>Captain of the Train of Four Team (TOF).</div>,
            <div>
              Devloped an application that automates the TOF test to measure a
              patient's nerve functions to guide treatment and procedures.
            </div>,
            <div>
              Utilized OpenCV to track and monitor patients' hands in real time.
            </div>,
          ]}
        ></ExperienceCard>
      </div>
    </>
  );
};

export default ExperienceSection;
